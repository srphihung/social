import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage from './scenes/homePage';
import LoginPage from './scenes/loginPage';
import ProfilePage from './scenes/profilePage';

function App() {
  return (
    <div className="app">
     <BrowserRouter>
      <Routes>
        <Route name="login" path="/" element={<LoginPage />} />
        <Route name="home" path="/home" element={<HomePage />} />
        <Route name="profile" path="/profile/:userId" element={<ProfilePage />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
