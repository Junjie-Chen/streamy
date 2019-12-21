import { SIGN_IN, SIGN_OUT, FETCH_STREAMS } from './types';
import streams from '../api/streams';

export const signIn = userId => ({
  type: SIGN_IN,
  payload: userId
});

export const signOut = () => ({
  type: SIGN_OUT
});

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({
    type: FETCH_STREAMS,
    payload: response.data
  });
};
