import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './config.js';

const firebaseApp = firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

//TODO: seperate these methods into smaller action files based on their concerns
// Email auth stuff 


const asyncGetLieDetails = async () => {
  const { docs } = await db.collection('lieData').get();
  return docs.map((lie) => ({
    ...lie.data()
  }));
}

const addDetail = (type, detail) => {
  var liesRef = db.collection('lieData');
  var typeDocRef = liesRef.doc('lies');
  typeDocRef.get().then(function (doc) {
    liesRef.doc('lies').update({
      [`${type}`]: firebase.firestore.FieldValue.arrayUnion(detail)
    });
  }).catch(function (error) {
    console.log('Error getting document:', error);
  });

};

const deleteDetail = (type, detail) => {
  var liesRef = db.collection('lieData');
  var typeDocRef = liesRef.doc('lies');
  typeDocRef.get().then(function (doc) {
    liesRef.doc('lies').update({
      [`${type}`]: firebase.firestore.FieldValue.arrayRemove(detail)
    });
  }).catch(function (error) {
    console.log('Error getting document:', error);
  });
}


export {
  firebaseApp,
  db,
  addDetail,
  deleteDetail,
  asyncGetLieDetails
};
