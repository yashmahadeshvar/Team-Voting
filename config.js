import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB-vp5YNNBc8K5LedsSdNPjcpwX6dK_7Zk",
    authDomain: "classtextagain.firebaseapp.com",
    databaseURL: "https://classtextagain-default-rtdb.firebaseio.com",
    projectId: "classtextagain",
    storageBucket: "classtextagain.appspot.com",
    messagingSenderId: "873645292415",
    appId: "1:873645292415:web:6aad81261925cbb8a8784a"
  };

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();