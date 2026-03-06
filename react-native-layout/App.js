import React, { useState } from 'react';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Todo from './screens/Todo';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Todo');

  if (currentScreen === 'Todo') return <Todo />;
  if (currentScreen === 'Signup') return <Signup onNavigate={() => setCurrentScreen('Login')} />;
  return <Login onNavigate={() => setCurrentScreen('Signup')} />;
}