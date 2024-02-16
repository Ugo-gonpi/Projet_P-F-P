import React, { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Jeux from './components/jeux/Jeux'
import Partie from './components/partie/Partie'
import Papier from './components/papier/Papier'
import Pierre from './components/pierre/Pierre'
import Scisseaux from './components/scisseaux/Scisseaux'


function App() {

  const [choice, setChoice] = useState("");

  function newGame(x) {
    setChoice(x)
  }

  return (
    <div className='App'>

      <Header />
      
      {
        choice == "" ? 
          <div className='App2'>
            <Papier newGame={newGame}/>
            <Scisseaux newGame={newGame}/>
            <Pierre newGame={newGame}/>
          </div>
          : 
          <div className='App2'>
            {
              choice == "papier" ? <Papier newGame={newGame}/> : ""
            }
            {
              choice == "scisseaux" ? <Scisseaux newGame={newGame}/> : ""
            }
            {
              choice == "pierre" ? <Pierre newGame={newGame}/> : ""
            }
          </div>
      }

      <Jeux />

      {/* <Partie /> */}

    </div>
  )
}

export default App
