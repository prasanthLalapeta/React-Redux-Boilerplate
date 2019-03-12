import { call, takeLatest, put } from 'redux-saga/effects';
import config from 'config.json';
import request, { makeReqOptions } from 'utils/request';
import { receivedApiResponse } from './actions';
import * as types from './constants';

function* fetchApi() {
  const requestUrl = config.api.base + config.api.apiUrl;
  try {
    const response = yield call(request, requestUrl, makeReqOptions({
      apiKey: localStorage.getItem('api_key'),
      method: 'GET',
    }));
    yield put(receivedApiResponse(response));
  } catch (e) {
    yield put(receivedApiResponse());
  }
}

export default function* profileSaga() {
  yield [
    takeLatest(types.REQUEST_API, fetchApi),
  ];
}
