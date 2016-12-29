import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { load } from '../../redux/modules/gallery';

import GalleryItem from './components/GalleryItem';

type PropType = {
  galleryList: Array<Object>,

  load: Function,
}

class Gallery extends PureComponent {
  props: PropType

  componentDidMount() {
    this.props.load();
  }

  render() {
    const { galleryList } = this.props;
    console.log(this.props.galleryList);
    return (
      <div>
        {
          galleryList.map((item) => 
            <GalleryItem
              key={item.id}
              article={item}
            />
          )
        }
        
      </div>
    );
  }
}

export default connect(
  ({ gallery }) => ({ galleryList: gallery.entities }),
  { load }, 
)(Gallery);
