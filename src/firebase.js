import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCApq8wxeCU0ZZ6OZhsxQ4BoB8x0Jld71Y",
  authDomain: "fb-clone-2eed3.firebaseapp.com",
  projectId: "fb-clone-2eed3",
  storageBucket: "fb-clone-2eed3.appspot.com",
  messagingSenderId: "1029588105452",
  appId: "1:1029588105452:web:02497018a634e00b61cdc9"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;