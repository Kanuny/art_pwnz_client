// @flow
const LOAD = 'art_pwnz/gallery/LOAD';
const LOAD_SUCCESS = 'art_pwnz/gallery/LOAD_SUCCESS';
const LOAD_FAILED = 'art_pwnz/gallery/LOAD_FAILED';

type ArticlesType = {
  entities: Array<Object>,
  count: number,
  pageCount: number,
};

const initialState = {
  entities: [],
  count: 0,
  pageCount: 0,
};

export default function reducer(state: ArticlesType = initialState, action: Object = {}) {
  switch (action.type) {
    case LOAD_SUCCESS: {
      return {
        ...state,
        entities: action.result.articles,
        count: action.result.count,
        pageCount: action.result.pageCount,
        page: action.result.page,
      };
    }

    default:
      return state;
  }
}

export function load(page: ?number) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAILED],
    request: (api: Object) => api.articles.load(page || 0),
  };
}
