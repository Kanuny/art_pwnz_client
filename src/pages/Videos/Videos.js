import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import moment from 'moment';
import cx from 'classnames';

import { load } from '../../redux/modules/videos';
import Paginator from '../../components/Paginator/Paginator';
import Loader from '../../components/Loader';

import styles from './styles';

const format = 'll';

type PropType = {
  videos: Array<Object>,
  count: number,
  pageSize: number,
  page: number,
  locale: string,

  router: Object,
  location: Object,
  load: Function,
}

class Gallery extends PureComponent {
  props: PropType

  componentDidMount() {
    const { page } = this.props.location.query;
    this.props.load(page || 0);
  }

  componentWillReceiveProps(nextProps) {
    const query = this.props.location.query;
    const nextQuery = nextProps.location.query;

    if (query.page !== nextQuery.page || query.filter !== nextQuery.filter) {
      this.props.load(nextQuery.page || 0);
    }
  }
  getUrl(page = 0, filter) {
    const filterString = filter ? `&filter=${filter}` : '';
    return `/videos?page=${page}${filterString}`;
  }
  render() {
    const { videos, page, count, load, locale, loading } = this.props;
    const { filter } = this.props.location.query;
    return (
      <div className={css(styles.galleryWrapper)} >
        <div className={css(styles.videosWrapper)} >
        { loading
          ? <Loader />
          : videos.map((video, index) =>
            <div className={cx(
                css(styles.videoItem),
                index % 2 === 0 ? css(styles.left) : '',
              )}
              key={video.id}
            >
              <iframe
                key={video.id}
                width="490"
                allowFullScreen
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
        </div>
        <Paginator
          page={page || 1}
          pageCount={count || 1}
          onPageChange={(nextPage) => this.props.router.push(this.getUrl(nextPage, filter))}
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
    count: Math.floor(videos.count / (videos.pageCount + 1)) + 1,
    locale: locale.locale,
    loading: videos.loading,
  }),
  { load },
)(Gallery);
