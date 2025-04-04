import { Players } from './components/Players';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

import './App.scss'

function App() {

  return (
    <main>
      <div id="game-container">
        <Players />

        <GameBoard />
      </div>

      <Log />
    </main>
  )
}

export default App
