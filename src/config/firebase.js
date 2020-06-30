import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCBAt83RWpVditzhUFnZuwV5JqCDbQEiBY",
  authDomain: "redux-firebase-78112.firebaseapp.com",
  databaseURL: "https://redux-firebase-78112.firebaseio.com",
  projectId: "redux-firebase-78112",
  storageBucket: "redux-firebase-78112.appspot.com",
  messagingSenderId: "141501868876",
  appId: "1:141501868876:web:7dbcfcde59ead3b3bf7de9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase