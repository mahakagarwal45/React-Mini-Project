import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {Signup} from './components/Signup';
import {Login} from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Dashboard';
import Logout from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/logout' element={<Logout />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}
export default App;