import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

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
const db = getDatabase();
export const auth = getAuth();

export const writeUserData = async (userAuth, additionalData) => {
  const { email, uid } = userAuth?.user;
  const createdAt = new Date();

  set(ref(db, "users/" + uid), {
    email,
    createdAt,
    ...additionalData,
  });
};

export const readUserData = async (uid, accessToken, callback) => {
  const userRef = ref(db, `users/${uid}`);
  onValue(userRef, (snapshot) => {
    const data = snapshot.val();

    callback({ uid, accessToken, ...data });
  });
};

export const writeProperty = async (uid, property, callback) => {
  const createdAt = new Date();
  const propertiesRef = ref(db, `users/${uid}/properties`);
  const newPropertyRef = push(propertiesRef);
  set(newPropertyRef, { ...property, createdAt });
};

export const getProperties = async (uid, callback) => {
  const propertiesRef = ref(db, `users/${uid}/properties`);
  onValue(propertiesRef, (snapshot) => {
    const data = snapshot.val();

    callback(data);
  });
};

export default firebase;
