import db, { firebase } from '~/services/firebase';
import { Alert } from 'react-native';

export function findNotesByCategory() {}

export async function create({ title, categoryRef }) {
  try {
    const note = await db.collection('notes').add({
      name: title,
      completed: false,
      actived: true,
      category: categoryRef,
      user: null,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    const noteRef = (await note.get()).ref;

    await categoryRef.update({
      todos: firebase.firestore.FieldValue.arrayUnion(noteRef),
    });

    Alert.alert('Sucesso', 'Sua tarefa foi adicionada.');
  } catch (error) {
    Alert.alert('Atenção', 'Não foi possível criar sua tarefa.');
  }
}
