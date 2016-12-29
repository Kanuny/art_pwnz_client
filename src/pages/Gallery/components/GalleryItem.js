import React from 'react';
import { Link } from 'react-router';

export default function GalleryItem(props) {
  const { article } = props;
  return (
    <Link
      to={`article/${article.id}`}
    >
      <img
        alt="article preview"
        src={article.images[0].preview}
      />
      <div>
        { article.name }
      </div>
    </Link>
  );
} 
