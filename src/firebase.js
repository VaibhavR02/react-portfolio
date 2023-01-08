import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBj7O4TrGoBvwCYsA1Fm0YJtNcOg38L00Q',
  authDomain: 'vaibhav-react-portfolio.firebaseapp.com',
  projectId: 'vaibhav-react-portfolio',
  storageBucket: 'vaibhav-react-portfolio.appspot.com',
  messagingSenderId: '670285097207',
  appId: '1:670285097207:web:edee96cfd8d07707370bf2',
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
