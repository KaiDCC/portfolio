import {useState, useEffect} from 'react';
import Navbar from './components/layout/Navbar';
import Home from './pages/home/Home';
import Particles from './components/shared/Particles';

import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (

    <Particles
      quantity={170}
      ease={80}
      color={isDarkMode ? "#b084e9" : "#dc5c5c"}
      refresh
    >
      <div className="portifolio-container">
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Home />
      </div>
    </Particles>
  )

}
export default App;