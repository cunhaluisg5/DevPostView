import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDcvXUSA1JMv2KCXEUy-22RIVIFjolBYrs",
  authDomain: "sujeitopost-57640.firebaseapp.com",
  projectId: "sujeitopost-57640",
  storageBucket: "sujeitopost-57640.appspot.com",
  messagingSenderId: "823946176756",
  appId: "1:823946176756:web:942273e982c74f39cf16a1",
  measurementId: "G-NB1EXSBSNV"
};

let app;

if(firebase.app.length){
  app = firebase.initializeApp(firebaseConfig);
}

export default app;