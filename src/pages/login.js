import React , { useState } from 'react'
import Navigation1 from '../components/navigation1';
import './login.css';
import { auth } from '../firebaseConfig.js';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()

    // Get inputs
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    // Check password
    const checkPasswords  = () =>{
        inputPassword ? console.log('Correcct password'): console.log('Password incorrect');
    }

    // Submit data
    // const submitData = ()=>{
    //     console.log(
    //     'Email: '+ inputEmail +'\n'+
    //     'Password1: '+ inputPassword+'\n');
    //     checkPasswords();
    //     debugger;
    // }

    // Login with email and password 
    const loginUser = async () =>{
        try{
            const userCredential = await signInWithEmailAndPassword(auth, inputEmail, inputPassword);
            console.log(userCredential.user);
            // console.log(
            //     'Email: '+ inputEmail +'\n'+
            //     'Password1: '+ inputPassword+'\n');
            //     checkPasswords();
            // if (userCredential === true){
            //     navigate('/register-with-success');
            //     debugger;
            // }
        }
        catch(error){
            console.log(error.message);
            //window.alert('Please check your credentials');
            //document.getElementById('text-alert').style.visibility='visible';
        }
    };

    const handleClick = ()=>{
        loginUser().then(()=>{navigate('/login-with-success')})
        
    }

    const handleSubmit = event=>{
        event.preventDefault()
    }

  return (
    <>
        <Navigation1/>
        <main>
        <div className="container-fluid d-flex justify-content-around align-items-center mt-5">
            <div className="section-1">
                <form onSubmit={handleSubmit}>
                    <h1 className="mb-3">Login</h1>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" placeholder='example@mail.com' className="form-control" id="inputEmail" aria-describedby="emailHelp" value={inputEmail} onChange={(event)=>{setInputEmail(event.target.value); console.log(event.target.value);}} required/>
                        {/* <!-- <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> --> */}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" placeholder='Password' className="form-control" id="inputPassword" value={inputPassword} onChange={(event)=>{setInputPassword(event.target.value); console.log(event.target.value);}} required/>
                        <div id="text-alert" className="form-text text_alert" style={{color: "red"}}>Password is incorrect</div>
                    </div>
                    <button className="btn btn-primary" onClick={handleClick}>Submit</button>
                </form>
            </div>
        </div>
  </main>
    </>
  )
}

export default Login