import './App.css';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Welcome from './WelcomePage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <Welcome/> }>
        <Route path="home" element = { <Home/> } />
        <Route path='register' element = { <Register/> } />
        <Route path="login" element = { <Login/> } />
      </Route>
    )
  );

  return (

    <RouterProvider router={ router }/>
    
  );
}

export default App;
