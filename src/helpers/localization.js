import React from 'react';
import { connect } from 'react-redux';

function LocalMsg(props) {
  const msg = localeData[props.ID][props.locale];

  return <span> { msg } </span>;
}

export default connect(
  ({ locale }) => ({ locale: locale.locale }),
)(LocalMsg);

const localeData = {
  HOME: {
    ru: 'Стена',
    en: 'Home'
  },
  GALLERY: {
    en: 'Gallery',
    ru: 'Работы',
  },
  VIDEOS: {
    en: 'Videos',
    ru: 'Видео',
  },
  ABOUT: {
    en: 'About',
    ru: 'Обо Мне',
  },
  NAME: {
    en: 'Yury Klapouh',
    ru: 'Юрий Клапоух',
  },
  LOADING: {
    en: 'LOADING',
    ru: 'ЗАГРУЗКА',
  },
  AVAILABLE: {
    en: 'Available for order',
    ru: 'Доступно для заказа',
  },
  UNAVAILABLE: {
    en: 'Unavailable',
    ru: 'Недоступно',
  },
  ADDED: {
    en: 'added',
    ru: 'добавленно',
  },
  SHARE_MSG: {
    en: 'If you like this one, share it with your friends.',
    ru: 'Пондравилось? Поделись с друзьями.',
  },
  NEXT: {
    en: 'next',
    ru: 'след.',
  },
  PREV: {
    en: 'prev',
    ru: 'пред.',
  },
  TRASH: {
    en: 'trash',
    ru: 'треш'
  },
  ARTHOUSE: {
    en: 'arthouse',
    ru: 'артхаус',
  },
  DESC: {
    en: 'oil on canvas',
    ru: 'холст/масло',
  }
};
