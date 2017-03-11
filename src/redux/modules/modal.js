// @flow
import moment from 'moment';

const OPEN = 'art_pwnz/modal/OPEN';
const CLOSE = 'art_pwnz/modal/CLOSE';

const SEND = 'art_pwnz/modal/SEND';
const SEND_SUCCESS = 'art_pwnz/modal/SEND_SUCCESS';
const SEND_FAIL = 'art_pwnz/modal/SEND_FAIL';

type ModalType = {
  opened: boolean,
};

const initialState = {
  opened: false,
};

export default function reducer(state: ModalType = initialState, action: Object = {}) {
  switch (action.type) {
    case OPEN: {
      return {
        ...state,
        opened: true,
      };
    }

    case CLOSE:
    case SEND_SUCCESS:
    case SEND_FAIL: {
      return {
        ...state,
        opened: false,
      };
    }

    default:
      return state;
  }
}

export function open() {
  return {
    type: OPEN,
  };
}

export function close() {
  return {
    type: CLOSE,
  };
}

export function send(data) {
  return {
    types: [SEND, SEND_SUCCESS, SEND_FAIL],
    request: (api: Object) => api.articles.send(data),
  };
}
