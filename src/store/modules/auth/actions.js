export function signInResquest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signUpResquest(email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    user,
  };
}

export function signUpSuccess() {
  return {
    type: '@auth/SIGN_UP_SUCCESS',
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
