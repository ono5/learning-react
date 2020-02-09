import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseSettings } from '../settings';

const db = firebase.initializeApp(firebaseSettings).firestore();

export default db;

const { Timestamp } = firebase.firestore;

export { Timestamp };
