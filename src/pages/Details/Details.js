import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import { Link } from 'react-router';

import { loadArticle, clear } from '../../redux/modules/article';
import LocalMsg from '../../helpers/localization';

import styles from './styles';

type PropType = {
  galleryList: Array<Object>,
  locale: string,

  load: Function,
}

class Details extends PureComponent {
  props: PropType

  state = {
    image: 'main',
  }

  componentDidMount() {
    this.props.loadArticle(this.props.params.id);
  }

  componentWillUnmount() {
    this.props.clear();
  }

  setImage(name: string) {
    this.setState({ image: name });
  }

  render() {
    const { article, loading, locale } = this.props;
    const { image } = this.state;

    const backBtn = '<';
    const images = this.props.images
      .reduce((imgs, image) => ({
        ...imgs,
        [image.name]: image,
      }), {});

    if (loading || ! article.name) {
      return (
        <div> <LocalMsg ID="LOADING" /> ... </div>
      );
    }

    return (
      
      <div className={css(styles.container)} >
        <header className={css(styles.header)} >
          <Link className={css(styles.backLink)} to="/gallery"> {backBtn} {article.name[locale]} </Link>
        </header>

        <section className={css(styles.content)}>
          <div className={css(styles.images)} >
            <div className={css(styles.mainContainer)} >
              <img
                className={css(styles.mainView)}
                name="mainView"
                src={images[image] ? images[image].fullScreen : ''}
              />
            </div>
            <div className={css(styles.previewContainer)} >
              <img
                className={css(styles.previewImage)}
                name="main"
                onClick={() => this.setImage('main')}
                src={images.main ? images.main.preview : ''}
              />
              {
                images.fragment1
                  ? <img
                    className={css(styles.previewImage)}
                    name="fragment1"
                    onClick={() => this.setImage('fragment1')}
                    src={images.fragment1 ? images.fragment1.preview : ''}
                  /> : null 
              }
              {
                images.fragment2
                  ? <img
                  className={css(styles.previewImage)}
                  name="fragment2"
                  onClick={() => this.setImage('fragment2')}
                  src={images.fragment2 ? images.fragment2.preview : ''}
                /> : null
              }
              {
                images.fragment3
                  ? <img
                    className={css(styles.previewImage)}
                    name="fragment3"
                    onClick={() => this.setImage('fragment3')}
                    src={images.fragment3 ? images.fragment3.preview : ''}
                  /> : null
              }
            </div>
          </div>
          <div className={css(styles.description)} >
            <div className={css(styles.info)} >
              <LocalMsg ID={article.forSale ? 'AVAILABLE' : 'UNAVAILABLE'}/>

              <span> {article.size},&nbsp;<LocalMsg ID={article.genre || 'TRASH'}/>,&nbsp;<LocalMsg ID="DESC"/>,&nbsp;{article.year} </span>
            </div>

            <div className={css(styles.postInfo)} >
              <span>{article.description ? article.description[locale] : ''}</span>
            </div>

          </div>
        </section>
      </div>
    );
  }
}

export default connect(
  ({ article, locale }) => ({
    article: article.entity,
    loading: article.loading,
    images: article.images,
    locale: locale.locale,
  }),
  { loadArticle, clear }, 
)(Details);
