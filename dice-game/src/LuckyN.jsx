import { useState } from 'react';
import { getRolls , sum } from './utils';
import Dice from './Dice.jsx'; 

function LuckyN({numDice = 2, goal=7 }) {
  const [dice, setDice] = useState(getRolls(numDice));
  const isWinner = sum(dice) === goal;
  const roll = () => setDice(getRolls(numDice));
  return(
    <main className=""> 
      <h1>Lucky {goal} {isWinner && "You win!"}</h1>
      <Dice dice={dice} />
      <button onClick={roll}>Re-Roll Dice</button>
    </main>
  )
}

export default LuckyN;