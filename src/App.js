import { unwrapResult } from '@reduxjs/toolkit';
import productApi from 'api/productApi';
import { getMe } from 'app/userSlice';
import Header from 'components/Header';
import NotFound from 'components/NotFound';
import SignIn from 'features/Auth/pages/SignIn';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router';

const Photo = React.lazy(() => import("./features/Photo"));

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // ...
};
firebase.initializeApp(config);

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === '/') navigate('/photos')
  }, [location.pathname, navigate])


  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,

        };
        const response = await productApi.getAll(params);
        setProductList(response.data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    }

    fetchProductList();
  }, []);


  // handle firebase auth changed
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        console.log('log out')
        return
      }

      // Get me when signed in
      // const action = getMe();
      try {
        const actionResult = await dispatch(getMe());
        const currentUser = unwrapResult(actionResult);
        console.log('Logged in user: ', currentUser);
      } catch (error) {
        console.log('Failed to login ', error.message);
        // show toast error
      }

    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <div className="photo-app">
      <Header />
      <Outlet />

      <Routes>
        <Route path="photos/*" element={
          <React.Suspense fallback={<>Loading... </>}>
            <Photo />
          </React.Suspense>
        } />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}



export default App;