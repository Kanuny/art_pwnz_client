// @flow
const LOAD = 'art_pwnz/gallery/LOAD';
const LOAD_SUCCESS = 'art_pwnz/gallery/LOAD_SUCCESS';
const LOAD_FAILED = 'art_pwnz/gallery/LOAD_FAILED';

type ArticlesType = {
  entities: Array<Object>
};

const initialState = {
  entities: [],
};

export default function reducer(state: ArticlesType = initialState, action: Object = {}) {
  switch (action.type) {
    case LOAD_SUCCESS: {
      return {
        ...state,
        entities: action.result,
      };
    }

    default:
      return state;
  }
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAILED],
    request: (api: Object) => api.articles.load(),
  };
}

