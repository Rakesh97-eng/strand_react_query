import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, useRoutes } from 'react-router-dom';
import './App.css';
import { getRoutes } from './layout/routes';

function App() {
  let routeType = sessionStorage.getItem('UR') || 0;
  const router = useRoutes(getRoutes(routeType));

  return (
    <div>
      {/* <RouterProvider router={router}/> */}
      {router}
    </div>
  );
}

export default App;
