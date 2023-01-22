import React, { useState, useEffect } from 'react';
import Navigation from '../components/navigation';
import './register.css';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function Register() {
    // Get inputs
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [inputPassword2, setInputPassword2] = useState('');
    const textAlert = document.getElementById('text-alert');

    const navigate = useNavigate()

    // Check password
    const checkPasswords  = () =>{
        inputPassword === inputPassword2 ? console.log('Correcct password'): console.log('Password incorrect'); textAlert.style.visibility='visible';
    }

    // Submit data
    // const submitData = ()=>{
    //     console.log('Name: '+inputName+'\n'+
    //     'Email: '+ inputEmail +'\n'+
    //     'Password1: '+ inputPassword+'\n'+
    //     'Password2: '+ inputPassword2+'\n');
    //     checkPasswords();
    //     debugger;
    // }

    //Hide alert text
    //document.getElementById('text-alert').style.visibility='hidden';
    useEffect(()=>{
        //textAlert.style.visibility = 'hidden';
    })

    // Register user
    const register =  async ()=>{
        try{
            checkPasswords();
            if (inputPassword === inputPassword2) {
                console.log('match');
                const user = await createUserWithEmailAndPassword(auth, inputEmail, inputPassword);
                console.log(user);
            }else if(inputPassword !== inputPassword2){
                console.log('no match');
                
            }
        }
        catch(error){
            console.log(error.message);
        }
    
        
    }

    const handleClick = ()=>{
        register().then(()=>{navigate('/unughana/register-with-success')})
        //navigate('/register-with-success')
    }
  return (
    <>
        <Navigation/>
        <main>
        <div className="container-fluid d-flex justify-content-around align-items-center mt-5">
            <div className="section-1">
                <form>
                    <h1 className="mb-3">Register</h1>
                    <div className="mb-3">
                        <label for="exampleInputName1" className="form-label">Full name</label>
                        <input type="text" placeholder='Full name' className="form-control" id="inputName" aria-describedby="emailHelp" value={inputName} onChange={(event)=>{setInputName(event.target.value); console.log(event.target.value);}} required/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" placeholder='example@mail.com' className="form-control" id="inputEmail" aria-describedby="emailHelp" value={inputEmail} onChange={(event)=>{setInputEmail(event.target.value); console.log(event.target.value);}} required/>
                        {/* <!-- <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> --> */}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" placeholder='Password' className="form-control" id="inputPassword" value={inputPassword} onChange={(event)=>{setInputPassword(event.target.value); console.log(event.target.value);}} required/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Confrim Password</label>
                        <input type="password" placeholder='Confirm password' className="form-control" id="inputPassword2" value={inputPassword2} onChange={(event)=>{setInputPassword2(event.target.value); console.log(event.target.value);}} required/>
                        <div id="text-alert" className="form-text text-alert" style={{color: "red"}}>Password is incorrect</div>
                    </div>
                    <button className="btn btn-primary" onClick={handleClick}>Submit</button>
                </form>
            </div>
        </div>
  </main>
    </>
  )
}

export default Register