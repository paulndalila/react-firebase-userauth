import './App.css';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
          <h1>User-Auth</h1>

          <ul>
             <li>Home</li>
             <li>About</li>
             <li>Contact Us</li>
             <li>Login</li>
          </ul>
      </div>

      

      <Login />
      <Register/>
    </div>
  );
}

export default App;
