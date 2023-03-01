import { signInWithGoogle } from "../../firebase/provider";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthenticated = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch, getState) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};
