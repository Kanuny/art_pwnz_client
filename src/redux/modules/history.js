// @flow
const LOAD = 'art_pwnz/history/LOAD';
const LOAD_SUCCESS = 'art_pwnz/history/LOAD_SUCCESS';
const LOAD_FAILED = 'art_pwnz/history/LOAD_FAILED';

type HistoryType = {
  entities: Array<Object>
};

const initialState = {
  entities: [],
  loading: false,
};

export default function reducer(state: HistoryType = initialState, action: Object = {}) {
  switch (action.type) {
    case LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        entities: action.result.reverse(),
      };
    }
    case LOAD: {
      return {
        ...state,
        loading: true,
      }
    }
    case LOAD_FAILED: {
      return {
        ...state,
        loading: false,
      }
    }
    default:
      return state;
  }
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAILED],
    request: (api: Object) => api.history.load(),
  };
}

