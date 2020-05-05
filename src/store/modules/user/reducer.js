import produce from 'immer';

const INITIAL_STATE = {
  uid: null,
  path: null,
  email: null,
  name: null,
  username: null,
  firstName: null,
  lastName: null,
  emailVerified: null,
  photo: null,
  phoneNumber: null,
  birthday: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/CREATE_USER': {
        break;
      }
      case '@auth/USER_REQUEST': {
        break;
      }
      case '@auth/USER_REQUEST_SUCCESS': {
        draft.uid = action.user.uid;
        draft.path = action.user.path;
        draft.email = action.user.email;
        draft.username = action.user.username;
        draft.name = action.user.name;
        draft.firstName = action.user.firstName;
        draft.lastName = action.user.lastName;
        draft.phoneNumber = action.user.phoneNumber;
        draft.emailVerified = action.user.emailVerified;
        draft.photo = action.user.photo;
        draft.birthday = action.user.birthday;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.uid = null;
        draft.path = null;
        draft.email = null;
        draft.username = null;
        draft.name = null;
        draft.firstName = null;
        draft.lastName = null;
        draft.phoneNumber = null;
        draft.emailVerified = null;
        draft.photo = null;
        draft.birthday = null;
        break;
      }
      default:
    }
  });
}
