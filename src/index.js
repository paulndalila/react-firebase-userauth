import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/react-firebase-userauth' element={ <App/> }>
        <Route index element = { <Login/> } />
      </Route>
      <Route path='/' element={ <App/> }>
        <Route index element = { <Login/> } />
      </Route>
      <Route index element = { <App/> } />
      <Route path='home' element = { <Home/> } />
      <Route path='register' element = { <Register/> } />
      <Route path='login' element = { <Login/> } />
    </>
  )
);

root.render(
  <React.StrictMode>

    <RouterProvider router={ router }/>

  </React.StrictMode>
);

