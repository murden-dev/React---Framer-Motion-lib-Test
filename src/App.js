import React from 'react';
import logo from './logo.svg';
import './App.css';
import { motion, AnimatePresence } from "framer-motion"

function App() {
  return (
    <AnimatePresence>
    <div className="App-header">
    <motion.div initial={{scale: 0.9, y: 50, opacity: 0}} animate={{scale: 1, y:0, opacity: 1}}transition = {{ delay: .5 }}
 className="App">
      <header className="App-header">
        <motion.div
        onContextMenu={(e)=> e.preventDefault()}
        drag
        dragConstraints={{top: 0, right: 0, bottom: 0, left: 0}}
        whileTap={{scale: 1.15}}
        whileHover={{scale: .9}}
        animate={{rotate: [0, 360]}}
        transition={{type: "spring", stiffness: 200, damping: 20, duration: 12, loop: Infinity}}
        className="LogoAnimation"
        >
          <img 
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
