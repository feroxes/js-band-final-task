export const SEND_REQUEST = 'SEND_REQUEST';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const sendRequest = () => {
  return { type: SEND_REQUEST };
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
