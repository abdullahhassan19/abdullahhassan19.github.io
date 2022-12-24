
import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import './App.css';
import resume from "./Assests/Resume/Abdullah_Mohammadi_Resume.pdf";
import Navbar from './Components/Navbar/Navbar';

import Home from './Pages/Home/Homepage';
import { ThemeContext } from './ThemeContext/ThemeContext';

function App() {
	const [state, setState] = useState(false);
	const { newTheme, open, handleMenu } =
		useContext(ThemeContext);
	const scrollRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			setState(true);
		}, 1000);
	}, []);


	return (
    <>
      {!state ? (
        <div
          style={{
            background: `${newTheme.background}`,
			
          }}
          className="logoStart"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdAw2bbflUDX_dEOH7jJbPESBsPJa4A4Aj-Q&usqp=CAU"
            alt="logo"
          />
        </div>
      ) : (
        <div className="components">
          <div
            style={{
              background: `${newTheme.menuBackground}`,
              color: `${newTheme.title}`,
              left: `${open ? "-100vw" : "0"}`,
            }}
            className="links"
          >
            <a onClick={handleMenu} href="#home">
              Home
            </a>
            <a onClick={handleMenu} href="#about">
              About
            </a>
            <a onClick={handleMenu} href="#projects">
              Projects
            </a>
            <a onClick={handleMenu} href="#techstacks">
              Skills
            </a>
            <a onClick={handleMenu} href="#contact">
              Contact
            </a>
            <a href={resume} download>
              Resume
            </a>
          </div>
          <Navbar />
          <Home scrollRef={scrollRef} />
        </div>
      )}
    </>
  );
}

export default App;
