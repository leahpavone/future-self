// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore,
  connectFirestoreEmulator,
  connectFunctionsEmulator
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCcTeD3UoPewI7KMqStovvxplk5kGS2RJg',
  authDomain: 'future-self-91441.firebaseapp.com',
  projectId: 'future-self-91441',
  storageBucket: 'future-self-91441.appspot.com',
  messagingSenderId: '556073194773',
  appId: '1:556073194773:web:6b22a5e6e0bb8127a8c51c',
  measurementId: 'G-1DEY5ELR94'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

if (window.location.hostname === 'localhost') {
  connectFirestoreEmulator(db, 'localhost', 8080);
}
// if (window.location.hostname === 'localhost') {
//   connectFunctionsEmulator(db, 'localhost', 5001);
// }

export { app, db, analytics };
