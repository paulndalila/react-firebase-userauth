import './App.css';
import Login from './Login';
import Register from './Register';

function App() {

  const isLoggedIn = true;

  return (
    <div className="App">
      <div className='navbar'>
          <h1>User-Auth</h1>

          <ul>
             <li>Home</li>
             <li>About</li>
             <li>Contact Us</li>
             {/* { isLoggedIn? <li>Logout</li> : <li>Login</li> }  */}
             
          </ul>
      </div>

      { isLoggedIn? <Login /> : <Register/> } 
      
    </div>
  );
}

export default App;
