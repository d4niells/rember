export function createUser(data) {
  return {
    type: '@auth/CREATE_USER',
    userData: data,
  };
}

export function createUserSuccess() {
  return {
    type: '@auth/CREATE_USER_SUCCESS',
  };
}

export function userResquest(uid) {
  return {
    type: '@auth/USER_REQUEST',
    uid,
  };
}

export function userResquestSuccess(user) {
  return {
    type: '@auth/USER_REQUEST_SUCCESS',
    user,
  };
}
