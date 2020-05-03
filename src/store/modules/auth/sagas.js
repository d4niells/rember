import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { signInSuccess, signUpSuccess, signFailure } from './actions';
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
    yield put(signFailure());

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

export function* signUp({ payload }) {
  try {
    const { email, password } = payload;

    yield call([auth, auth.createUserWithEmailAndPassword], email, password);

    yield put(signUpSuccess());
  } catch (error) {
    yield put(signFailure());

    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('Error', 'That email address is already in use.');
    } else if (error.code === 'auth/invalid-email') {
      Alert.alert('Error', 'That email address is invalid.');
    } else {
      Alert.alert('Error', 'Sign Up failed, check your internet connection.');
    }
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
