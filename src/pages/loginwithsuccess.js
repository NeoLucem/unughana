import React from 'react';
import Navigation1 from '../components/navigation1';
import { auth } from '../firebaseConfig.js';
// import { onAuthStateChanged} from 'firebase/auth';

function LoginWithSuccess() {
    
    const user = auth.currentUser;

  return (
    <>
        <Navigation1/>
        <div className='container' style={{position:'absolute', top: '50%', left: '10%'}}>
            <h1>Welcome <span id='diplayName'>{user.email}</span></h1>
        </div>    
    </>
  )
}

export default LoginWithSuccess