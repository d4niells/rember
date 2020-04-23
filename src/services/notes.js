import db from '~/services/firebase';
import { Alert } from 'react-native';

export async function getNotes() {
  const notes = await db.collection('notes').get();
}

export async function createNote(data) {
  try {
    await db.collection('notes').sadd({
      name: data.name,
      color: data.color,
      todos: [],
    });
  } catch (error) {
    Alert.alert('Atenção', 'Não foi possível salvar.');
  }
}
