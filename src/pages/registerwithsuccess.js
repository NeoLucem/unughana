import React from 'react';
import Navigation1 from '../components/navigation1';
 

function RegisterWithSuccess() {
  return (
    <>
        <Navigation1/>
        <div className='container' style={{position:'absolute', top: '50%', left: '10%'}}>
            <h1>Your account has been created</h1>
        </div>
    </>
  )
}

export default RegisterWithSuccess