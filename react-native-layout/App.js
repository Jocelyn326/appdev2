import React, { useState } from 'react';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Todo from './screens/Todo';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Login');

  return currentScreen === 'Login' ? (
    <Login 
      onNavigate={() => setCurrentScreen('Signup')} 
      onLogin={() => setCurrentScreen('Todo')} 
    />
  ) : currentScreen === 'Signup' ? (
    <Signup onNavigate={() => setCurrentScreen('Login')} />
  ) : (
    <Todo onNavigate={() => setCurrentScreen('Login')} />
  );
}