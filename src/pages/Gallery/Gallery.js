import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import { load } from '../../redux/modules/gallery';
import Paginator from '../../components/Paginator/Paginator';

import GalleryItem from './components/GalleryItem';
import styles from './styles';

type PropType = {
  galleryList: Array<Object>,

  load: Function,
  count: number,
  pageSize: number,
  page: number,
  locale: string,
  router: Object,
  location: Object,
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
    return `/gallery?page=${page}${filterString}`; 
  }
  render() {
    const { galleryList, page, count, locale } = this.props;
    const { filter } = this.props.location.query;

    return (
      <div className={css(styles.galleryWrapper)}>
        <div className={css(styles.itemWrapper)}>
        {
          galleryList.map((item) => 
            <GalleryItem
              key={item.id}
              locale={locale}
              article={item}
            />
          )
        }
        </div>
        <Paginator
          page={page || 0}
          pageCount={count || 0}
          onPageChange={(nextPage) => this.props.router.push(this.getUrl(nextPage, filter))}
        />
      </div>
    );
  }
}

export default connect(
  ({ gallery, locale }) => ({
    galleryList: gallery.entities,
    pageSize: gallery.pageCount,
    page: parseInt(gallery.page, 10) + 1,
    count: Math.floor(gallery.count / (gallery.pageCount + 1)) + 1,
    locale: locale.locale,
  }),
  { load }, 
)(Gallery);
