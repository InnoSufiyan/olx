// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { getFirestore, collection, addDoc, setDoc, doc, getDoc ,} from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAKx-2aElmBlrwKnzvsMugnDsSPRWcTIs",
  authDomain: "olxreactt.firebaseapp.com",
  projectId: "olxreactt",
  storageBucket: "olxreactt.appspot.com",
  messagingSenderId: "468957855607",
  appId: "1:468957855607:web:8dff2c790d71dd35d8eb72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth();
const db = getFirestore(app);






function registerUser(regParams) {

  const { email, password , phone , fullName } = regParams


  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.uid)
    setDoc(doc(db, 'users', user.uid), {
      fullName, email, phone, uid: user.uid
    })
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    // ..
  });
}


function loginUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user is signed in")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("did not found user")
  });
}


async function adPost (product, price, quantity) {
  // const {product, price, quantity} = postDetails
  console.log(product)
  console.log(price)
  console.log(quantity)
  const docRef = await addDoc(collection(db, "add"), {
    product ,price, quantity
  })
}


export {
  registerUser,
  loginUser,
  adPost
}