import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
