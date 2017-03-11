// @flow
const LOAD = 'art_pwnz/gallery/LOAD';
const LOAD_SUCCESS = 'art_pwnz/gallery/LOAD_SUCCESS';
const LOAD_FAILED = 'art_pwnz/gallery/LOAD_FAILED';

const FILTERS = 'art_pwnz/gallery/FILTERS';
const FILTERS_SUCCESS = 'art_pwnz/gallery/FILTERS_SUCCESS';
const FILTERS_FAILED = 'art_pwnz/gallery/FILTERS_FAILED';

type ArticlesType = {
  loading: boolean,
  entities: Array<Object>,
  count: number,
  pageCount: number,
  filters: Array<Object>
};

const initialState = {
  entities: [],
  loading: false,
  count: 0,
  pageCount: 0,
  filters: [],
};

export default function reducer(state: ArticlesType = initialState, action: Object = {}) {
  switch (action.type) {
    case LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        entities: action.result.articles,
        count: action.result.count,
        pageCount: action.result.pageCount,
        page: action.result.page,
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

    case FILTERS_SUCCESS: {
      return {
        ...state,
        filters: action.result,
      };
    }

    default:
      return state;
  }
}

export function load(page: ?number, filter: ?string) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAILED],
    request: (api: Object) => api.articles.load({ page: page || 0, filter }),
  };
}

export function getFilters() {
  return {
    types: [FILTERS, FILTERS_SUCCESS, FILTERS_FAILED],
    request: (api: Object) => api.articles.getFilters(),
  }
}
