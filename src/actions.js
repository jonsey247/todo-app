export const SIGN_IN = 'SIGN_IN';
export const Get_SIGN_IN = 'Get_SIGN_IN';
const signIn = signIn => ({
  type: SIGN_IN,
  payload: signIn
});
const getSignIn = getSignIn => ({
  type: Get_SIGN_IN
});

export default {
  signIn,
  getSignIn
};