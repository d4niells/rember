import db, { firebase } from '~/services/firebase';
import { Alert } from 'react-native';

export function findNotesByCategory() {}

export async function createNote(title) {
  try {
    await db.collection('notes').add({
      title: title,
      completed: false,
      actived: true,
      category: null,
      user: null,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    Alert.alert('Sucesso', 'Sua tarefa foi adicionada.');
  } catch (error) {
    Alert.alert('Atenção', 'Não foi possível criar sua tarefa.');
  }
}
