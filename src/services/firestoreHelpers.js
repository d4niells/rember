import db from '~/services/firebase';

export function getDocument(path) {
  return db.doc(path);
}
