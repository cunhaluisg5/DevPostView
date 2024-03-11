import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

process.env.DATABASE

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

let app;

if(firebase.app.length){
  app = firebase.initializeApp(firebaseConfig);
}

export default app;