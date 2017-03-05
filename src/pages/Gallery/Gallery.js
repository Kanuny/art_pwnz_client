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
}

class Gallery extends PureComponent {
  props: PropType

  componentDidMount() {
    this.props.load(0);
  }

  render() {
    const { galleryList, page, count, load, locale } = this.props;

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
          onPageChange={(page) => load(page)}
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
