import React, { useContext } from 'react';
import ThemeContext, { ThemeProvider } from './ThemeContext';

function Header(){
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header>
      <h1 style={{ color: theme === 'light' ? '#333' : '#fff' }}>Theme Example</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;