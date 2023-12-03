import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDOX5snQxY-AMQVBXezTX9VdhB_8PzG_c4",
  authDomain: "netflix-clone-c715c.firebaseapp.com",
  projectId: "netflix-clone-c715c",
  storageBucket: "netflix-clone-c715c.appspot.com",
  messagingSenderId: "536562323000",
  appId: "1:536562323000:web:9fa483077b67e063ab20cd",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
