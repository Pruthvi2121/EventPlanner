
import './App.css';
import { AuthProvider } from './Components/Auth/Auth';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import AddForm from './Components/Event/AddForm';
import MyEvents from './Components/Event/MyEvent';
import Landingpage from './Components/Landingpage/Landingpage';
import { Routes,Route } from 'react-router-dom';

import { RequireAuth } from './Components/Auth/RequireAuth';
function App() {
  
  return (
    <div>
      
      <AuthProvider>
        <Routes>
        
            <Route path='/' element={<Landingpage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/> 
            <Route path='/add' element={<RequireAuth> <AddForm/></RequireAuth>}/> 
            <Route path='/myevents' element={<RequireAuth> <MyEvents/></RequireAuth>}/> 
        </Routes>
      </AuthProvider>
       
    </div>
  );
}

export default App;
