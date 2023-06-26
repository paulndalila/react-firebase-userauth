import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import App from './components/App';
import ErrorPath from './components/ErrorPath';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
      <Route index element = { <App/> } />

      {/* apparently, there are 2types of paths in my react project; / and /react-firebase-userauth */}

      {/* the first one */}
      <Route path='/react-firebase-userauth' element={ <App/> }>
        <Route index element = { <Login/> } />
        <Route path='register' element = { <Register/> } />
        <Route path='home' element = { <Home/> } />
        <Route path='*' element = { <ErrorPath/> } />
      </Route>

      {/* the second one */}
      <Route path='/' element={ <App/> }>
        <Route index element = { <Login/> } />
        <Route path='home' element = { <Home/> } />
        <Route path='register' element = { <Register/> } />
        <Route path='home' element = { <Home/> } />
        <Route path='*' element = { <ErrorPath/> } />
      </Route>

    </>
  )
);

root.render(
  <React.StrictMode>

    <RouterProvider router={ router }/>

  </React.StrictMode>
);

