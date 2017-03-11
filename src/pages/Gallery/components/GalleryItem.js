import React from 'react';
import { Link } from 'react-router';
import { css } from 'aphrodite';

import styles from '../styles';

export default function GalleryItem(props) {
  const { article, locale } = props;
  return (
    <Link
      className={css(styles.item)}
      to={`gallery/${article.id}`}
    >
      <img
        className={css(styles.img)}
        alt="article preview"
        src={article.images[0].preview}
      />
      <div className={css(styles.itemName)}>
        { article.name[locale] || <span> &nbsp; </span> }
      </div>
    </Link>
  );
}
