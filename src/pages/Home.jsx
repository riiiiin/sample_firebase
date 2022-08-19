import { auth } from '../firebase';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/Authcontext';
import React from 'react';



const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
   
  const handleLogout = () => {
    auth.signOut();
    navigate('/');
  };
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return (
      <div>
        
        <h1>ホーム</h1>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
    );
  }
};

export default Home;