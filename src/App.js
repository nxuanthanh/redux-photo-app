import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.scss';

// Lazy load - Code splitting

function App() {
  return (
    <div className="photo-app">
      <ul>
        <li><Link to="photo">Go to photo page</Link></li>
        <li><Link to="photo/add">Go to Add new photo page</Link></li>
        <li><Link to="photo/123">Go to Edit photo page</Link></li>
      </ul>
      {<Outlet />}
    </div>
  );
}

export default App;