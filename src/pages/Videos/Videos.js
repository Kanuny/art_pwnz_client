import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import moment from 'moment';
import cx from 'classnames';

import { load } from '../../redux/modules/videos';
import Paginator from '../../components/Paginator/Paginator';

import styles from './styles';

const format = 'll';

type PropType = {
  videos: Array<Object>,
  count: number,
  pageSize: number,
  page: number,
  locale: string,

  load: Function,
}

class Gallery extends PureComponent {
  props: PropType

  componentDidMount() {
    this.props.load(0);
  }

  render() {
    const { videos, page, count, load, locale } = this.props;

    return (
      <div className={css(styles.galleryWrapper)} >
        {
          videos.map((video, index) => 
            <div className={cx(
                css(styles.videoItem),
                index % 2 === 0 ? css(styles.left) : '',
              )}
              key={video.id}
            >
              <iframe
                key={video.id}
                width="490"
                height="340"
                src={video.url.replace('watch?v=', 'embed/')}
              />
              <div>
                <h1 className={css(styles.name)} > {video.name[locale]} </h1>
                <span> added {moment(video.createdAt).format(format)} </span>
              </div>
            </div>
          )
        }
        <Paginator
          page={page}
          pageCount={count}
          onPageChange={(page) => load(page)}
        />
      </div>
    );
  }
}

export default connect(
  ({ videos, locale }) => ({
    videos: videos.entities,
    pageSize: videos.pageCount,
    page: parseInt(videos.page, 10) + 1,
    count: Math.floor((videos.count / videos.pageCount) + 1),
    locale: locale.locale,
  }),
  { load }, 
)(Gallery);
