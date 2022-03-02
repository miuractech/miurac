import { getAuth } from "firebase/auth";
import { ApplicationError, FirebaseAuth } from "rxf";
import ""
const firebaseAuth = new FirebaseAuth(getAuth(), new ApplicationError());

export default firebaseAuth;
