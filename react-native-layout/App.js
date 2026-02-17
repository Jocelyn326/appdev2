import React, { useState } from 'react';
import Login from './screens/Login';
import Signup from './screens/Signup';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Login');

  return currentScreen === 'Login' ? (
    <Login onNavigate={() => setCurrentScreen('Signup')} />
  ) : (
    <Signup onNavigate={() => setCurrentScreen('Login')} />
  );
}