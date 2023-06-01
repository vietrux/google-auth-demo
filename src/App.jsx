import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import Login from './pages/Login';
import { auth } from './services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState, useEffect } from 'react';

export default function App(){
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);
  
  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home 
          user={user}
        />} />
        <Route path="/user" element={<User 
          user={user}
        />} />
        <Route path="/login" element={<Login 
          user={user}
          login={login}
        />} />
      </Routes>
    </BrowserRouter>
  )
}


