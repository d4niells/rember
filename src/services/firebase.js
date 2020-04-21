import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import '@react-native-firebase/auth';

const db = firebase.firestore();
const auth = firebase.auth();

export default db;
export { firebase, auth };
