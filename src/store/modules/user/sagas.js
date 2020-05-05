import { Alert } from 'react-native';
import { takeLatest, put, all } from 'redux-saga/effects';
import { createUserSuccess, userResquestSuccess } from './actions';
import { signFailure } from '../auth/actions';
import db, { firebase } from '~/services/firebase';

export function* create({ userData }) {
  try {
    const data = {
      uid: userData.user.uid || null,
      name: userData.name || null,
      username: userData.username || null,
      email: userData.email || null,
      photo: userData.user.photoURL || null,
      birthday: userData.birthday || null,
      phoneNumber: userData.user.phoneNumber || null,
      emailVerified: userData.user.emailVerified,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    };

    yield db.collection('users').doc(data.uid).set(data);

    yield put(createUserSuccess());
  } catch (error) {
    yield put(signFailure());
    Alert.alert('Error', 'Create user failed, check your internet connection.');
  }
}

export function* userRequest({ uid }) {
  try {
    const userDoc = yield db.collection('users').doc(uid).get();
    const userData = { ...userDoc.data(), path: userDoc.ref.path };

    yield put(userResquestSuccess(userData));
  } catch (error) {
    yield put(signFailure());
    Alert.alert('Error', 'Check your internet connection.');
  }
}

export default all([
  takeLatest('@auth/CREATE_USER', create),
  takeLatest('@auth/USER_REQUEST', userRequest),
]);
