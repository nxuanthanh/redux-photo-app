import Header from 'components/Header';
import NotFound from 'components/NotFound';
import React, { useEffect } from 'react';
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router';

const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') navigate('/photos')
  }, [location.pathname, navigate])

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}



export default App;