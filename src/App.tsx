import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import SignIn from './pages/SignIn/SignIn';
import User from './pages/User/User';

const App:React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default App;
