import db from '~/services/firebase';

export function getDocument(path) {
  return db.doc(path);
}

export function documentSnapShot(query, callback, callbackError) {
  return query.onSnapshot(
    async (document) => {
      const documentPromises = document.docs.map((note) => {
        return { ...note.data(), id: note.id, path: note.ref.path };
      });
      const data = await Promise.all(documentPromises);
      return callback(data);
    },
    (error) => {
      return callbackError ? callbackError(error) : null;
    }
  );
}
