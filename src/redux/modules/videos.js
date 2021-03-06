// @flow
const LOAD = 'art_pwnz/videos/LOAD';
const LOAD_SUCCESS = 'art_pwnz/videos/LOAD_SUCCESS';
const LOAD_FAIL = 'art_pwnz/videos/LOAD_FAIL';

type VideosType = {
  entities: Array<Object>,
  count: number,
  pageCount: number,
  page: number,
  loading: boolean,
};

const initialState = {
  entities: [],
  count: 0,
  pageCount: 0,
  page: 0,
  loading: false,
};

export default function reducer(state: VideosType = initialState, action: Object = {}) {
  switch (action.type) {
    case LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        entities: action.result.videos,
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
    case LOAD_FAIL: {
      return {
        ...state,
        loading: false,
      }
    }
    default:
      return state;
  }
}


export function load(page: ?number) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    request: (api: Object) => api.videos.load(page || 0),
  };
}
