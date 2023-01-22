import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import RegisterWithSuccess from './pages/registerwithsuccess';
import LoginWithSuccess from './pages/loginwithsuccess';

function App() {
  return (
    <div className='app-header'>
    {/* <NavigationBar/> */}
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register-with-success' element={<RegisterWithSuccess/>}/>
      <Route path='/login-with-success' element={<LoginWithSuccess/>}/>
    </Routes>
  </div>
  );
}

export default App;
