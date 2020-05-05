import db, { firebase } from '~/services/firebase';
import { Alert } from 'react-native';

export async function createCategory(data) {
  try {
    await db.collection('categories').add({
      name: data.name,
      user: data.userRef,
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

export async function listCategories() {
  const categoriesDocs = await db.collection('categories').get();

  const categories = await Promise.all(
    categoriesDocs.docs.map(async (category) => {
      const categoryData = await category.data();
      return {
        ...categoryData,
        id: category.id,
        path: category.ref.path,
      };
    })
  );

  return categories;
}
