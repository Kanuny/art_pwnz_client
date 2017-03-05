// @flow
const LOAD = 'art_pwnz/article/LOAD';
export const LOAD_SUCCESS = 'art_pwnz/article/LOAD_SUCCESS';
const LOAD_FAILED = 'art_pwnz/article/LOAD_FAILED';

const LOAD_IMAGE = 'art_pwnz/article/LOAD_IMAGE';
const LOAD_IMAGE_SUCCESS = 'art_pwnz/article/LOAD_IMAGE_SUCCESS';
const LOAD_IMAGE_FAILED = 'art_pwnz/article/LOAD_IMAGE_FAILED';

const CLEAR = 'art_pwnz/article/CLEAR';

type ArticlesType = {
  entity: Object,
  loading: boolean,
  images: Array<Object>,
};

const initialState = {
  entity: {},
  images: [],
  loading: false,
};

export default function reducer(state: ArticlesType = initialState, action: Object = {}) {
  switch (action.type) {
    case LOAD: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    case LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        entity: action.result,
      };
    }
    case CLEAR: {
      return {
        ...state,
        images: [],
      };
    }
    case LOAD_IMAGE_SUCCESS: {
      return {
        ...state,
        images: [...state.images, action.result],
      };
    }
    default:
      return state;
  }
}

export function loadArticle(id: number) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAILED],
    request: (api: Object) => api.articles.getById(id),
  };
}

export function getImage(image) {
  return {
    types: [LOAD_IMAGE, LOAD_IMAGE_SUCCESS, LOAD_IMAGE_FAILED],
    image,
    request: (api: Object) => api.articles.getImage(image.id),
  };
}

export function clear() {
  return {
    type: CLEAR,
  };
}
