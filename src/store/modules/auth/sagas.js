import { Alert } from 'react-native';
import { takeLatest, call, put, all, take } from 'redux-saga/effects';
import { signInSuccess, signUpSuccess, signFailure } from './actions';
import { createUser, userResquest } from '../user/actions';
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

    yield put(userResquest(user.uid));
    yield take('@auth/USER_REQUEST_SUCCESS');

    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signFailure());

    if (error.code === 'auth/user-not-found') {
      Alert.alert('Atenção', 'Email ou senha inválido.');
    } else if (error.code === 'auth/wrong-password') {
      Alert.alert('Atenção', 'Email ou senha inválido.');
    } else if (error.code === 'auth/invalid-email') {
      Alert.alert('Oops', 'O endereço de email está mal formatado.');
    } else {
      Alert.alert(
        'Ocorreu um erro',
        'Falha na autenticação. Verifique sua conexão com a Internet.'
      );
    }
  }
}

export function* signUp({ payload }) {
  try {
    const { email, password } = payload;

    const data = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      email,
      password
    );

    yield put(createUser({ ...data, ...payload }));

    yield take('@auth/CREATE_USER_SUCCESS');

    yield put(signUpSuccess());
  } catch (error) {
    yield put(signFailure());

    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('Atenção', 'Esse endereço de email já esta em uso.');
    } else if (error.code === 'auth/invalid-email') {
      Alert.alert('Oops', 'Esse endereço de email é inválido.');
    } else {
      Alert.alert(
        'Ocorreu um erro',
        'A inscrição falhou, verifique sua conexão com a Internet.'
      );
    }
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
