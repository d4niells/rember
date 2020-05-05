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

export function userResquest(email) {
  return {
    type: '@auth/USER_REQUEST',
    email,
  };
}
