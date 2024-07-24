import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Register/>} exact></Route>
        <Route path='/home' element={<Home/>} exact></Route>
        <Route path='/' element={<Login/>} exact></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
