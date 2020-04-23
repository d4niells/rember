import db, { firebase } from '~/services/firebase';
import { Alert } from 'react-native';

export async function getNotes() {
  const notes = await db.collection('notes').get();
}

export async function createNote(data) {
  try {
    await db.collection('categories').add({
      name: data.name,
      user: null,
      color: data.color,
      todos: [],
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    Alert.alert('Sucesso', 'Sua categoria foi adicionada.');
  } catch (error) {
    Alert.alert('Atenção', 'Não foi possível criar sua categoria.');
  }
}
