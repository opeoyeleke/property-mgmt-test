import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const firebase = initializeApp(config);
const db = getFirestore();

export const auth = getAuth();

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const { email } = userAuth?.user;
  const createdAt = new Date();
  try {
    const docRef = await addDoc(collection(db, "users"), {
      email,
      createdAt,
      ...additionalData,
    });

    console.log(docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default firebase;
