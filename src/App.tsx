import Game from './pages/Game';
import Start from './pages/Start';
import Finished from './pages/Finished';
import useTicTacToe from './hooks/useTicTacToe';
import React from 'react';

const App = () => {
  const game = useTicTacToe();
  return (
    <div className="App">
      { game.status === "created" && (
        <Start handleStart={game.handleStart} />
      )}
      { game.status === "finished" && (
        <div>
          <Finished name={game.winner} handleRestart={game.handleRestart} />
          <hr />
          <Game board={game.board} handleClick={() => {}}/>
        </div>
      )}
      { game.status === "started" && (
        <Game board={game.board} handleClick={game.handleClick} />
      )}
    </div>
  )
}

export default App
