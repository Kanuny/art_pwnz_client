import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';

import { LOAD_SUCCESS, getImage as getImage, clear } from '../modules/article';

function* loadImage(action) {
  yield put(clear());
  const images = action.result.images;

  for (let i = 0; i < images.length; i += 1) {
    yield put(getImage(images[i]));
  }
}

function* onArticleLoadSubscribe() {
  yield takeEvery(LOAD_SUCCESS, loadImage);
}

export default [
  onArticleLoadSubscribe,
];
