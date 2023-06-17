import './loginRegister.css';

export default function Login(){
    return (
        <div className='container'>
            <div className='form'>
                <input type="email" name='email' placeholder='Email address' />
                <input type="password" name='password' placeholder='Password'/>
                <button id='signin' name='signin'>Sign In</button>
            </div>
        </div>
    );
}