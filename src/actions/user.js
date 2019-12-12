export const SET_LOADING = 'SET_LOADING';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const setLoading = data => {
  return {
    type: SET_LOADING,
    payload: data,
  };
};

export const signIn = data => {
  return {
    type: SIGN_IN,
    payload: data,
  };
};
export const signOut = () => {
  return { type: SIGN_OUT };
};
