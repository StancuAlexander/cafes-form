import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZyukDKHR0LsNiAFsByn70Ik4wv1YTK9w",
  authDomain: "form-test-7122b.firebaseapp.com",
  projectId: "form-test-7122b",
  storageBucket: "form-test-7122b.appspot.com",
  messagingSenderId: "126829678509",
  appId: "1:126829678509:web:e797198333645ed6829b24",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
