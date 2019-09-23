import React from 'react';
import './mockup.scss';
import AppScreen from './AppScreen'
import { motion, AnimatePresence } from "framer-motion"

function App() {

  return (
    <div class="container">
      <AnimatePresence>
        <motion.div
        initial={{opacity: 0, scale: .8, boxShadow: 'inset 0 0 11px 0 #000, 0 12px 24px 0px #00000000'}}
        animate={{opacity: 1, scale: .7, boxShadow: 'inset 0 0 11px 0 #000, 0px 40px 72px -32px #000000'}}
        transition={{ delay: .4, duration: .3, type: "spring", stiffness: 100, mass: 3, damping: 30 }}
        class="marvel-device iphone-x">
        <div class="notch">
        <div class="camera">
        </div>
        <div class="speaker">
        </div>
        </div>
        <div class="top-bar">
        </div>
        <div class="sleep">
        </div>
        <div class="bottom-bar">
        </div>
        <div class="volume">
        </div>
        <div class="overflow">
        <div class="shadow shadow--tr">
        </div>
        <div class="shadow shadow--tl">
        </div>
        <div class="shadow shadow--br">
        </div>
        <div class="shadow shadow--bl">
        </div>
        </div>
        <div class="inner-shadow">
        </div>
        <div class="screen">
          <AppScreen/>
        </div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <AppScreen/>
      </AnimatePresence>
    </div>
  );
}

export default App;
