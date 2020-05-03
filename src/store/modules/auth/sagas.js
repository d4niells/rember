import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { signInSuccess, signInFailure } from './actions';
import { auth } from '~/services/firebase';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const data = yield call(
      [auth, auth.signInWithEmailAndPassword],
      email,
      password
    );

    const { user } = data;

    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailure());

    if (error.code === 'auth/user-not-found') {
      Alert.alert('Error', 'Invalid email or password.');
    } else if (error.code === 'auth/wrong-password') {
      Alert.alert('Error', 'Invalid email or password.');
    } else if (error.code === 'auth/invalid-email') {
      Alert.alert('Error', 'The email address is poorly formatted.');
    } else {
      Alert.alert(
        'Error',
        'Authentication failed, check your internet connection.'
      );
    }
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
