import { SIGN_IN } from './types';

export const signIn = userId => ({
  type: SIGN_IN,
  payload: userId
});
