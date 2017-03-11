import React from 'react';
import { connect } from 'react-redux';

function LocalMsg(props) {
  const msg = localeData[props.ID][props.locale];

  return <span> { msg } </span>;
}

export default connect(
  ({ locale }) => ({ locale: locale.locale }),
)(LocalMsg);
const filters = [
  { name: 'all', query: {}},
  { name: 'forSale', query: { forSale: true } },
  { name: 'landscape', query: { genre: 'landscape' } },
  { name: 'portrait', query: { genre: 'portrait' } },
  { name: 'stillLife', query: { genre: 'stillLife' } },
  { name: 'figurative', query: { genre: 'figurative' } },
  { name: 'other', query: { genre: false || null } },
];
const localeData = {
  SEND_TITLE: {
    en: 'Send a message',
    ru: 'Отправить сообщение',
  },
  SEND: {
    en: 'Send',
    ru: 'Отправить',
  },
  CANCEL: {
    en: 'Cancel',
    ru: 'Отмена',
  },
  INQUIRY: {
    en: 'Inquiry',
    ru: 'Заказать',
  },
  all: {
    ru: 'Все',
    en: 'All',
  },
  forSale: {
    en: 'For sale',
    ru: 'В наличии',
  },
  landscape: {
    en: 'Landscape',
    ru: 'Пейзаж',
  },
  portrait: {
    en: 'Portrait',
    ru: 'Портрет',
  },
  stillLife: {
    en: 'Still Life',
    ru: 'Натюрморт',
  },
  figurative: {
    en: 'Figurative',
    ru: 'Фигуратив',
  },
  other: {
    en: 'Other',
    ru: 'Другое',
  },
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
    ru: 'Обо мне',
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
  },
  BACK: {
    en: 'back',
    ru: 'назад',
  },
};
