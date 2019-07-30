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
        drag
        dragConstraints={{top: 0, right: 0, bottom: 0, left: 0}}
        whileTap={{scale: 0.75}} whileHover={{scale: 1.2}} transition={{type: "spring", stiffness: 200, damping: 20}}>
          <img src={logo} className="App-logo" alt="logo" />
        </motion.div>
        <motion.p animate={{y: 0}} initial={{y: 50}}
>
          Edit <code>src/App.js</code> and save to reload.
        </motion.p>
        <motion.a whileTap={{scale: 0.9}} whileHover={{scale: 1.05}} animate={{y: 0}} initial={{y: 50}}
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
