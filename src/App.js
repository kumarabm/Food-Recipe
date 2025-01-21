import React, { useState } from 'react';
import Login from '../src/components/Login';
import Recipe from '../src/components/recipe';
import '../src/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status); // Update login status when the user successfully logs in
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Recipe />
      )}
    </div>
  );
};

export default App;
