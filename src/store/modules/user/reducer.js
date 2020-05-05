import produce from 'immer';

const INITIAL_STATE = {
  uid: null,
  path: null,
  email: null,
  name: null,
  firstName: null,
  lastName: null,
  photo: null,
  birthdate: null,
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
        draft.name = action.user.name;
        draft.firstName = action.user.firstName;
        draft.lastName = action.user.lastName;
        draft.photo = action.user.photo;
        draft.birthdate = action.user.birthdate;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.uid = null;
        draft.path = null;
        draft.email = null;
        draft.name = null;
        draft.firstName = null;
        draft.lastName = null;
        draft.photo = null;
        draft.birthdate = null;
        break;
      }
      default:
    }
  });
}
