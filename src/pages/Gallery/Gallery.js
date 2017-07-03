import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import { Link } from 'react-router';
import cx from 'classnames';

import { load, getFilters } from '../../redux/modules/gallery';
import Paginator from '../../components/Paginator/Paginator';
import Loader from '../../components/Loader';

import LocalMsg from '../../helpers/localization';

import GalleryItem from './components/GalleryItem';
import styles from './styles';

type PropType = {
  getFilters: Function,
  load: Function,

  galleryList: Array<Object>,
  count: number,
  pageSize: number,
  page: number,
  locale: string,
  router: Object,
  location: Object,
  filters: Array<Object>,
}

class Gallery extends PureComponent {
  props: PropType

  componentDidMount() {
    this.props.getFilters();
    const { page, filter } = this.props.location.query;
    this.props.load(page || 0, filter);
  }
  componentWillReceiveProps(nextProps) {
    const query = this.props.location.query;
    const nextQuery = nextProps.location.query;

    if (query.page !== nextQuery.page || query.filter !== nextQuery.filter) {
      this.props.load(nextQuery.page || 0, nextQuery.filter);
    }
  }
  getUrl(page = 0, filter) {
    const filterString = filter ? `&filter=${filter}` : '';
    return `/gallery?page=${page}${filterString}`;
  }
  getFilter(filter) {
    const page = this.props.page
    const filterString = filter ? `&filter=${filter}` : '';
    return `/gallery?page=${page - 1}${filterString}`;
  }
  render() {
    const { galleryList, page, count, locale, filters, loading } = this.props;
    const { filter } = this.props.location.query;

    return (
      <div className={css(styles.galleryWrapper)}>
        <div className={css(styles.filterWrapper)}>
          {
            filters.map((f, index) =>
              <span key={f.name}>
                <Link
                  className={cx(
                    css(styles.filterLink),
                    f.name === (filter || 'all') ? css(styles.filterActive) : ''
                  )}
                  to={this.getFilter(f.name)}
                >
                  <LocalMsg ID={f.name} />
                  {` ${ index < filters.length - 1 ? '/' : ''}`}
                </Link>
              </span>
            )
          }
        </div>
        <div className={css(styles.itemWrapper)}>
        { loading ? <Loader /> : galleryList.map((item) =>
            <GalleryItem
              key={item.id}
              locale={locale}
              article={item}
            />
          ) }
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
  ({ gallery, locale }) => ({
    galleryList: gallery.entities,
    loading: gallery.loading,
    pageSize: gallery.pageCount,
    page: parseInt(gallery.page, 10) + 1,
    count: Math.floor((gallery.count / gallery.pageCount) + 0.5) + 1,
    locale: locale.locale,
    filters: gallery.filters,
  }),
  { load, getFilters },
)(Gallery);
