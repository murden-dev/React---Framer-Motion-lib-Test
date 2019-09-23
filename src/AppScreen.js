import React, { Component } from 'react';

import { Button, TextField } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';

import './App.scss';
import { motion } from "framer-motion"


const theme = createMuiTheme({
  palette: {
    primary: { 500: '#7641E7' },
  },
});

class AppScreen extends Component {
  render() {
    return <div class="app">
    <ThemeProvider theme={theme}>
      <motion.p
      initial={{ y: -50, opacity: 0}}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.6, duration: .4, type: "spring", stiffness: 100, mass: 1, damping: 15 }}
      >
        File management is so 2018...
      </motion.p>
      <motion.h1
      initial={{ y: -50, opacity: 0}}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.6, duration: .2, type: "spring", stiffness: 100, mass: 3, damping: 25 }}
      >
        We know<span>.</span>
      </motion.h1>
      <div style={{position: 'relative'}}>
      <motion.div // linha horizontal acima
        initial={{ y: -10, opacity: 0}}
        animate={{ y: 0, opacity: 1}}
        transition={{ delay: 4.2, duration: .5, staggerChildren: 0.2}}
        >
          <svg width="375" height="147" viewBox="0 0 375 147" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M171.326 146.713C156.243 146.725 141.264 144.211 127.011 139.276C107.904 132.671 92.2507 123.561 80.4866 112.198C58.2337 90.7048 39.9897 87.4656 28.6056 88.5322C5.45162 87.8059 0.303145 110.448 0.232166 110.511L-0.258057 109.965C-0.185646 109.9 5.11071 87.1149 28.4895 87.8059C35.8478 87.1083 43.5427 88.3238 51.3611 91.4198C61.111 95.2806 71.0819 102.094 80.9967 111.67C92.6833 122.958 108.246 132.013 127.251 138.582C162.141 150.642 201.464 147.722 235.136 130.571C246.285 124.892 257.304 121.015 267.887 119.05C281.231 116.57 293.887 117.145 305.505 120.759C331.035 128.7 348.473 128.279 358.606 126.528C369.54 124.639 374.5 120.858 374.549 120.82L375 121.399C374.795 121.559 369.844 125.331 358.731 127.251C348.518 129.016 330.955 129.444 305.287 121.46C279.297 113.377 252.975 122.308 235.47 131.225C218.827 139.747 200.653 144.873 182.009 146.303C178.435 146.576 174.874 146.713 171.326 146.713Z" fill="#3F3D56"/>
            <path d="M88.4434 118.668L87.9181 118.155C90.3343 115.416 92.1658 112.213 93.3003 108.742C95.0864 103.368 95.9589 94.8805 89.9716 84.9663C83.8458 74.8226 83.5701 66.5836 84.4174 61.4582C85.3395 55.8812 87.6921 52.7551 87.7917 52.6248L88.3751 53.0705C88.3516 53.1011 86.0196 56.2106 85.1347 61.6213C84.3177 66.6166 84.6027 74.656 90.6 84.5868C96.7404 94.7545 95.8308 103.477 93.9866 109.004C91.9883 114.993 88.5874 118.521 88.4434 118.668Z" fill="#3F3D56"/>
            <path d="M190.86 144.725L190.334 144.212C192.75 141.473 194.582 138.27 195.716 134.799C197.503 129.425 198.375 120.937 192.387 111.023C186.262 100.88 185.986 92.6405 186.834 87.5151C187.756 81.9381 190.108 78.812 190.208 78.6817L190.791 79.1274C190.768 79.158 188.436 82.2674 187.551 87.6782C186.734 92.6735 187.019 100.713 193.016 110.644C199.157 120.811 198.247 129.534 196.402 135.061C194.404 141.05 191.003 144.578 190.86 144.725Z" fill="#3F3D56"/>
            <path d="M292.908 118.301L292.383 117.788C294.799 115.049 296.63 111.846 297.765 108.375C299.551 103.001 300.424 94.5135 294.436 84.5993C288.311 74.4556 288.035 66.2166 288.882 61.0912C289.804 55.5142 292.157 52.3881 292.257 52.2578L292.84 52.7035C292.817 52.7341 290.484 55.8436 289.599 61.2543C288.782 66.2496 289.067 74.289 295.065 84.2198C301.205 94.3875 300.296 103.11 298.451 108.637C296.453 114.626 293.052 118.154 292.908 118.301Z" fill="#3F3D56"/>
          </svg>
          
          <motion.div class="box"
          initial={{y: 100, x: 0, opacity: 0}}
          animate={{y: 0, x: [0, 5, -5, 0], opacity: 1}}
          transition={{ delay: 4.2, duration: .8, type: "spring", mass: 2, damping: 50 }}
          >
            <svg width="375" height="147" viewBox="0 0 375 147" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M115.903 1.03226H63.2581V52.6452H115.903V1.03226Z" fill="#F2F2F2"/>
              <path d="M115.982 53.2147H63.1217V0.366999H115.982V53.2147ZM63.8559 52.4807H115.247V1.101H63.8559V52.4807Z" fill="#3F3D56"/>
              <path d="M106.437 15.7809H74.1342V16.5149H106.437V15.7809Z" fill="#3F3D56"/>
              <path d="M106.437 23.8549H74.1342V24.5889H106.437V23.8549Z" fill="#3F3D56"/>
              <path d="M106.437 31.9288H74.1342V32.6628H106.437V31.9288Z" fill="#3F3D56"/>
            </svg>
          </motion.div>
          
          <motion.div class="box"
          initial={{y: 100, x: 0, opacity: 0}}
          animate={{y: 0, x: [0, 5, -5, 0], opacity: 1}}
          transition={{ delay: 4.4, duration: .8, type: "spring", mass: 2, damping: 50 }}
          >
            <svg width="375" height="147" viewBox="0 0 375 147" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M218.097 26.8387H165.452V78.4516H218.097V26.8387Z" fill="#F2F2F2"/>
              <path d="M218.398 79.2716H165.538V26.4239H218.398V79.2716ZM166.272 78.5376H217.663V27.1579H166.272V78.5376Z" fill="#3F3D56"/>
              <path d="M208.119 40.7368H175.816V41.4708H208.119V40.7368Z" fill="#3F3D56"/>
              <path d="M208.119 48.8108H175.816V49.5447H208.119V48.8108Z" fill="#3F3D56"/>
              <path d="M208.119 56.8847H175.816V57.6187H208.119V56.8847Z" fill="#3F3D56"/>
            </svg>
          </motion.div>
          
          <motion.div class="box"
          initial={{y: 100, x: 0, opacity: 0}}
          animate={{y: 0, x: [0, 5, -5, 0], opacity: 1}}
          transition={{ delay: 4.6, duration: .8, type: "spring", mass: 2, damping: 50 }}
          >
            <svg width="375" height="147" viewBox="0 0 375 147" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M320.29 0H267.645V52.6452H320.29V0Z" fill="#F2F2F2"/>
              <path d="M320.446 52.8477H267.587V0H320.446V52.8477ZM268.321 52.1137H319.712V0.733996H268.321V52.1137Z" fill="#3F3D56"/>
              <path d="M310.168 15.7809H277.865V16.5149H310.168V15.7809Z" fill="#3F3D56"/>
              <path d="M310.168 23.8549H277.865V24.5889H310.168V23.8549Z" fill="#3F3D56"/>
              <path d="M310.168 31.9288H277.865V32.6628H310.168V31.9288Z" fill="#3F3D56"/>
            </svg>
          </motion.div>

        </motion.div>
        
        <motion.div class="top"
        initial={{x: 0, y: '-10%', opacity: 0}}
        animate={{x: 0, y: '100%', opacity: 1}}
        transition={{ delay: 3.5, duration: .4, type: "spring", mass: 1, damping: 20 }}
        >
          <svg width="100" height="36" viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M99.9468 10.9328H0.471191V35.7308H99.9468V10.9328Z" fill="#3F3D56"/>
            <path opacity="0.1" d="M68.9392 10.9328H30.7627V23.374H68.9392V10.9328Z" fill="black"/>
            <path d="M67.4709 0.253159H32.9652V21.539H67.4709V0.253159Z" fill="#CFFF63"/>
          </svg>
        </motion.div>
        
        <motion.div class="left"
        initial={{x: -100, y: '153%', opacity: 0}}
        animate={{x: 0, y: '153%', opacity: 1}}
        transition={{ delay: 3.5, duration: .4, type: "spring", mass: 1, damping: 20 }}
        >
          <svg width="147" height="67" viewBox="0 0 147 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M146.489 0.315994H0.815918V66.5592H146.489V0.315994Z" fill="#3F3D56"/>
            <path d="M73 7H21V60H73V7Z" fill="#F2F2F2"/>
            <path d="M73.399 59.8248H20.5392V6.97702H73.399V59.8248ZM21.2733 59.0908H72.6649V7.71102H21.2733V59.0908Z" fill="white"/>
            <path d="M63.1207 22.7579H30.8175V23.4919H63.1207V22.7579Z" fill="#333333"/>
            <path d="M63.1207 30.8319H30.8175V31.5659H63.1207V30.8319Z" fill="#333333"/>
            <path d="M63.1207 38.9059H30.8175V39.6399H63.1207V38.9059Z" fill="#333333"/>
          </svg>
        </motion.div>
        
        <motion.div class="right"
        initial={{x: 100, y: '90%', opacity: 0}}
        animate={{x: 0, y: '95%', opacity: 1}}
        transition={{ delay: 3.5, duration: .4, type: "spring", mass: 1, damping: 20 }}
        >
          <svg width="89" height="111" viewBox="0 0 89 111" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M88.4135 110.541H0.768921L25.3818 67.9213L44.5912 34.6566L88.4135 110.541Z" fill="#3F3D56"/>
            <path d="M44.4379 34.5979C53.9775 34.5979 61.711 26.8663 61.711 17.3288C61.711 7.7913 53.9775 0.0596313 44.4379 0.0596313C34.8982 0.0596313 27.1648 7.7913 27.1648 17.3288C27.1648 26.8663 34.8982 34.5979 44.4379 34.5979Z" fill="#CFFF63"/>
          </svg>
        </motion.div>
        
        <motion.div class="absolute center" // triângulo do meio
        initial={{x: '-50%', y: 100, opacity: 0}}
        animate={{x: '-50%', y: -15, opacity: 1}}
        transition={{ delay: 3.5, duration: .2, type: "spring", stiffness: 100, mass: 1, damping: 25 }}
        >
          <svg width="122" height="120" viewBox="0 0 122 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M121.522 119.596H0.582642L0.678087 119.431L40.3413 50.747L61.0521 14.8803L97.9769 78.8261L121.489 119.541L121.522 119.596Z" fill="#CFFF63"/>
            <path d="M60.8694 15.7841C64.9783 15.7841 68.3093 12.4539 68.3093 8.34588C68.3093 4.23786 64.9783 0.907654 60.8694 0.907654C56.7604 0.907654 53.4294 4.23786 53.4294 8.34588C53.4294 12.4539 56.7604 15.7841 60.8694 15.7841Z" fill="#3F3D56"/>
          </svg>
        </motion.div>
        
        <motion.div
        class="chao"
        initial={{y: '342%', x: '-50%', opacity: 0}}
        animate={{y: '340%', x: '-50%', opacity: 1}}
        transition={{ delay: 3.5, duration: .3, type: "spring", mass: 2, damping: 50 }}
        >
          <svg width="276" height="27" viewBox="0 0 276 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M276 26H0V27H276V26Z" fill="#3F3D56"/>
            <path d="M262.77 0.478492C262.785 0.489043 262.8 0.500078 262.816 0.511594C263.002 0.647526 263.271 0.850524 263.601 1.11717C264.26 1.65059 265.161 2.43795 266.123 3.4518C268.049 5.4819 270.209 8.40725 271.184 12.0092C272.158 15.6112 271.768 19.2262 271.128 21.9503C270.809 23.3108 270.428 24.4447 270.127 25.2378C269.977 25.6343 269.847 25.9453 269.755 26.1566C269.747 26.1744 269.739 26.1916 269.732 26.208C269.718 26.1975 269.702 26.1865 269.687 26.1749C269.5 26.039 269.231 25.836 268.901 25.5694C268.242 25.0359 267.341 24.2486 266.379 23.2347C264.453 21.2046 262.293 18.2793 261.318 14.6773C260.344 11.0754 260.734 7.46039 261.374 4.73626C261.693 3.37579 262.074 2.24183 262.375 1.4487C262.525 1.05223 262.655 0.741228 262.748 0.529991C262.755 0.512106 262.763 0.494937 262.77 0.478492Z" fill="#CFFF63" stroke="#333333" stroke-width="0.5"/>
            <path d="M263.985 13.1709C269.415 18.4557 270.078 26.5798 270.078 26.5798C270.078 26.5798 261.938 26.1354 256.507 20.8505C251.077 15.5657 250.414 7.44159 250.414 7.44159C250.414 7.44159 258.555 7.88599 263.985 13.1709Z" fill="#3F3D56"/>
          </svg>
        </motion.div>
      </div> 
      <motion.div
      class="form"
      initial={{y: 50, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{ delay: 4.6, duration: .2, type: "spring", mass: 1, damping: 25 }}
      >
          <TextField
          label="E-mail"
          margin="dense"
          variant="outlined"
          fullWidth
          style={{background: '#f7f7f7'}}/>
          
          <TextField
          label="Senha"
          margin="dense"
          variant="outlined"
          type="password"
          fullWidth
          style={{marginBottom: '1.5rem', background: '#f7f7f7'}}/>
          
          <Button
          variant="contained"
          size="medium"
          margin="normal"
          color="primary"
          fullWidth
          style={{marginBottom: '1rem'}}>Entrar</Button>
          <Button
          variant="outlined"
          size="medium"
          margin="normal"
          color="primary"
          fullWidth>Cadastre-se</Button>
      </motion.div>
      </ThemeProvider>
    </div>
  }
}

export default AppScreen;
