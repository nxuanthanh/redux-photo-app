import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import NotFound from './components/NotFound';
import AddEditPage from './features/Photo/pages/AddEdit';
import MainPage from './features/Photo/pages/Main';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Photo = React.lazy(() => import('./features/Photo'));


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path="photo" element={<Photo />} >
              <Route index element={<MainPage />} />
              <Route path='add' element={<AddEditPage />} />
              <Route path=':photoId' element={<AddEditPage />} />
              <Route path="*" element={NotFound} />
            </Route>
            <Route path="*" element={NotFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
