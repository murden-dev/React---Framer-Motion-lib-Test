import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { motion, AnimatePresence } from "framer-motion"

const containerVariants = {
  active: {
    scale: 1,
    opacity: 1,
    boxShadow: "0px 0px 0px 8px #60dafb",
    transition: {
      staggerChildren: 0.4,
      when: "beforeChildren"
    }
  },
  disabled: {
    scale: .8,
    opacity: .5,
    boxShadow: "0px 0px 0px 0px #60dafb",
    transition: {
      duration: .26,
      staggerChildren: 0,
      when: "afterChildren"
    }
  }
}

const innerVariants = {
  active: {
    opacity: 1,
    y: "0px",
    filter: "grayscale(0%)",
    transition: {
      duration: .26
    }
  },
  disabled: {
    opacity: 0,
    y: "50px",
    filter: "grayscale(100%)",
    transition: {
      duration: .13
    }
  },
  rotating: {
    rotate: 360,
    transition: {
      loop: Infinity,
      duration: 4
    }
  },
  scaled: {
    scale: .85
  }
}

function App() {

  const [isToggled, setToggle] = useState(false);

  return (
    <AnimatePresence>
    <div className="App-header">
    <motion.div className="App">
      <header className="App-header">
        <motion.div
        key="container"
        onContextMenu={(e)=> e.preventDefault()}
        initial={"disabled"}
        animate={
          isToggled
          ? "active"
          : "disabled"
        }
        exit={"exit"}
        variants={containerVariants}
        className="LogoAnimation"
        >
          <motion.img
          key="img1"
          drag
          dragConstraints={{top: 0, right: 0, bottom: 0, left: 0}}
          whileTap={"rotating"}
          whileHover={"scaled"}
          variants={innerVariants}
          onClick={() => {
            setToggle(!isToggled)
          }}
          src={logo} className=" App-logo" alt="logo" 
          />
          <motion.img
          key="img2"
          drag
          dragConstraints={{top: 0, right: 0, bottom: 0, left: 0}}
          whileTap={"rotating"}
          whileHover={"scaled"}
          variants={innerVariants}
          onClick={() => setToggle(!isToggled)}
          src={logo} className="App-logo" alt="logo" 
          />
          <motion.img
          key="img3"
          drag
          dragConstraints={{top: 0, right: 0, bottom: 0, left: 0}}
          whileTap={"rotating"}
          whileHover={"scaled"}
          variants={innerVariants}
          onClick={() => setToggle(!isToggled)}
          src={logo} className="App-logo" alt="logo" 
          />
        </motion.div>
        <motion.p
        initial={{y: 50}}
        animate={{y: 0}}
>
          Edit <code>src/App.js</code> and save to reload.
        </motion.p>
        <motion.a
        whileTap={{scale: 0.9}}
        whileHover={{scale: 1.05}}
        initial={{y: 50}}
        animate={{y: 0}}
          className="App-link"
          href="https://murden.dev"
          target="_blank"
          rel="noopener"
        >
          React Developer
        </motion.a>
      </header>
    </motion.div>
    </div>
  </AnimatePresence>
  );
}

export default App;
