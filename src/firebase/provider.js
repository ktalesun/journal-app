import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, uid, email, photoURL } = result.user;

    return {
      ok: true,
      //   User info
      displayName,
      uid,
      email,
      photoURL,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { ok: false, errorCode, errorMessage };
  }
};


export const registerWithEmailAndPassword = async({email, password, displayName}) => {
  try {

    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const {uid, photoURL} = resp.user;

    console.log(resp)
    // Actualizar usuario en firebase
    await updateProfile(FirebaseAuth.currentUser, {displayName,} )

    return {
      ok: true,
      uid, photoURL, email, displayName
    }

  } catch(error) {
    return {
      ok: false,
      errorMessage: error.message
  }
  }

}


export const loginWithEmailAndPassword = async({email, password}) => {
  // Sign in with email and password
  try{

    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const {displayName, uid, photoURL} = resp.user;
    return {
      ok: true,
      displayName,
      uid,
      photoURL 
    }

  }catch(error){
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}
