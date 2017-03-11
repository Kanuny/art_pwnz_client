// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import moment from 'moment';
import { Link } from 'react-router';

import { load } from '../../redux/modules/history'
import LocalMsg from '../../helpers/localization';
import Loader from '../../components/Loader';

import styles from './styles';

const format = 'll';

function ArticleItem(props) {
  return (
    <Link
      to={`gallery/${props.item.id}`}
    >
      <img
        className={css(styles.img)}
        alt="article preview"
        src={props.item.images[0].preview}
      />
    </Link>
  );
}

function VideoItem(props) {
  return <iframe
    allowFullScreen
    width="500"
    height="300"
    src={props.item.url.replace('watch?v=', 'embed/')}
  />;
}

function HistoryItem(props) {
  const { locale } = props;
  const { postName, name, postDescription, description, type } = props.item;

  return (
    <article className={css(styles.article)} >
      <header className={css(styles.header)} >
        <h1>
          { postName && postName[locale]
            ? postName[locale]
            : name[locale]
          }
          , <LocalMsg ID="ADDED"/> {moment(props.item.createdAt).format(format)}
        </h1>
      </header>
      <section className={css(styles.section)} >
        {
          type === 'video'
            ? <VideoItem item={props.item} />
            : <ArticleItem item={props.item} />
        }
        <div className={css(styles.description)} >
          {
            postDescription && postDescription[locale]
              ? postDescription[locale]
              : (description && description[locale] ? description[locale] : '')
          }
        </div>
      </section>
      <footer className={css(styles.footer)} >
        <LocalMsg ID="SHARE_MSG"/>
      </footer>
    </article>
  );
}

class History extends PureComponent {
  props: {
    load: Function,
    history: Array<Object>,
    locale: string,
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    const { history, locale, loading } = this.props;

    return (
      <section className={css(styles.homeContainer)} >
        { loading
          ? <Loader />
          : history.map((item) => <HistoryItem locale={locale} key={item.id + item.type} item={item} />)
        }
      </section>
    );
  }
}

export default connect(
  ({ history, locale }) => ({
    history: history.entities,
    locale: locale.locale,
    loading: history.loading,
  }),
  { load },
)(History);
