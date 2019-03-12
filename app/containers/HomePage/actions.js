import * as types from './constants';

export const fetchApi = (payload) => ({
  type: types.REQUEST_API,
  payload,
});
export const receivedApiResponse = (payload) => ({
  type: types.RECIEVED_RESPONSE,
  payload,
});
