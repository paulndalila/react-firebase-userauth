import './loginRegister.css';

function login(){
    return (
        <div className='container'>
            <div className='form'>
                <input type='email' name='email' placeholder='Email Address'/>
                <input type='password' name='password' placeholder='Password'/>
            </div>
        </div>
    );
}

export default login;