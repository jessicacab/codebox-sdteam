import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Homepage';
import Login from './Pages/Login';

const Main = () => {
return (         
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/home' element={<Home/>} />
  </Routes>
);
}
export default Main;