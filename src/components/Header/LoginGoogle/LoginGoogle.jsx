import React from "react";
import { auth, provider } from "../../../firebase-config";
import { signInWithPopup } from "firebase/auth";

const LoginGoogle = ({
  isAuth,
  setIsAuth,
  userCache,
  setUserCache
}) => {

const setUserInformation = (user) => {
  const { displayName, email, photoURL } = user.user;
  setUserCache(user,{ name: displayName, email: email, photo: photoURL });
  navigator("/");
};

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserInformation (result);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default LoginGoogle;
