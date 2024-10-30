import { takeEvery, call, put } from 'redux-saga/effects';

function* fetchData() {
  try {
    const response = yield call(fetch, 'https://api.example.com/data');
    const data = yield response.json();
    yield put({ type: 'FETCH_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'FETCH_FAILURE', payload: error.message });
  }
}

function* watchFetchData() {
  yield takeEvery('FETCH_REQUEST', fetchData);
}

export default function* rootSaga() {
  yield watchFetchData();
}
