import './loginRegister.css';
import { Link } from 'react-router-dom';

export default function Register(){
    return (
        <div className='container'>
            <div className='form'>
                <h3>Register</h3>
                <input type="email" name='regEmail' placeholder='Email address' />
                <input type="password" name='regPassword' placeholder='Password'/>
                <button id='register' name='register'>Register</button>
                
                <div>Already have an account? <Link to="/"> Login </Link></div>
            </div>
        </div>
    );
}