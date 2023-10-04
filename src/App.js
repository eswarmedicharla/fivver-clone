import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const Layout = () => {
    return (
      <div className='App'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>

    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
