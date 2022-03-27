import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'redirect',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: '/photos',
  // callbacks: {
  //   // Avoid redirects after sign-in.
  //   signInSuccessWithAuthResult: () => false,
  // },
};

function SignIn() {
  return (
    <div>
      <div className="text-center">
        <h2>Login Form</h2>

        <p>or login with social account</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    </div>
  );
}

SignIn.propTypes = {};

export default SignIn;
