import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import '@react-native-firebase/auth';

const db = firebase.firestore();
const auth = firebase.auth();

db.settings({ persistence: true });

export default db;
export { firebase, auth };
