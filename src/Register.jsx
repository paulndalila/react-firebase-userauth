import './loginRegister.css';

export default function Register(){
    return (
        <div className='container'>
            <div className='form'>
                <input type="email" name='regEmail' placeholder='Email address' />
                <input type="password" name='regPassword' placeholder='Password'/>
                <button id='register' name='register'>Register</button>
            </div>
        </div>
    );
}