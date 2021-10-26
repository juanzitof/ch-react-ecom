import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAsdGGfZyKfl8wpRstT6-J9c07BIpZ4TVI",
  authDomain: "amor-por-los-aromas.firebaseapp.com",
  projectId: "amor-por-los-aromas",
  storageBucket: "amor-por-los-aromas.appspot.com",
  messagingSenderId: "270722729365",
  appId: "1:270722729365:web:5b76d60631368b0ecb229c"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore() {
  return firebase.firestore(app)
}