import { SIGN_IN, SIGN_OUT, FETCH_STREAMS, FETCH_STREAM, CREATE_STREAM } from './types';
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

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({
    type: FETCH_STREAM,
    payload: response.data
  });
};

export const createStream = inputValues => async (dispatch, getState) => {
  const { userId } = getState().auth;

  const response = await streams.post('/streams', { ...inputValues, userId });

  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  });
};
