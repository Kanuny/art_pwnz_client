// @flow
import moment from 'moment';

const CHANGE_LOCALE = 'art_pwnz/locale/CHANGE_LOCALE';

type LocaleType = {
  locale: 'ru' | 'en'
};

const initialState = {
  locale: 'en',
};

export default function reducer(state: LocaleType = initialState, action: Object = {}) {
  switch (action.type) {
    case CHANGE_LOCALE: {
      moment.locale(action.locale);
      return {
        ...state,
        locale: action.locale,
      };
    }

    default:
      return state;
  }
}

export function changeLocale(nextLocale: LocaleType) {
  return {
    type: CHANGE_LOCALE,
    locale: nextLocale,
  };
}

