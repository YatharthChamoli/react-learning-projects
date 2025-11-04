// import { useState } from 'react'
// import 

// export default function ScoreKeeper({numPlayers =3, target=5}) {
//   const [scores, setScores] = useState(new Array(numPlayers).fill(0));
//   // const incrementScore = (index) => {
//   //   setScores((prevScores) => {
//   //     const copy = [...prevScores];
//   //     copy[index] += 1;
//   //     return copy;
//   //   })
//   // }

//   const incrementScore = (index) => {
//     setScores((prevScores) => {
//       return prevScores.map((score, i) => {
//         if (i === index) return score + 1;{
//           return score;
//         }
//       })
//     })
//   }

//   const reset = () => {
//     setScores(new Array(numPlayers).fill(0));
//   }

//   return (
//     <div>
//       <h1>Score Keeper</h1>
//       <ul>
//         {scores.map((score, index) => {
//             return ( 
//             <li key={index}>
//               Player{index + 1}: {score}
//               <button onClick={() => incrementScore(index)}>+1</button>
//               {score >= target && "WINNER!"}
//             </li>
//           );    
//         })}
//       </ul>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }


import React, { useState, useMemo, useEffect } from 'react';
import './score.css';
                                    
/**
 * ScoreKeeper component: Manages the state and UI for a multi-player score game.
 * @param {number} numPlayers - The number of players in the game.
 * @param {number} target - The score required to win.
 */
function ScoreKeeper({ numPlayers = 10, target = 3 }) {
  // Initialize scores state: an array filled with 0s.
  const [scores, setScores] = useState(
    () => new Array(numPlayers).fill(0)
  );

  // Determine the winner(s) using useMemo for efficiency.
  const winners = useMemo(() => {
    return scores.reduce((acc, score, index) => {
      if (score >= target) {
        acc.push(index);
      }
      return acc;
    }, []);
  }, [scores, target]);
  
  const isGameOver = winners.length > 0;

  // Function to increment a player's score.
  const incrementScore = (index) => {
    // Only allow score increment if the game is not over
    if (isGameOver) return; 

    setScores((prevScores) => {
      // Use map to create a new array, ensuring immutability for state updates
      return prevScores.map((score, i) => {
        return i === index ? score + 1 : score;
      });
    });
  };

  // Function to reset the game.
  const reset = () => {
    setScores(new Array(numPlayers).fill(0));
  };
  
  // Console logging for game end (can be replaced with a visual effect)
  useEffect(() => {
    if (isGameOver) {
      console.log(`Player(s) ${winners.map(w => w + 1).join(', ')} won! 🎉`);
    }
  }, [isGameOver, winners]);

  return (
    <div className="score-card">
        
      {/* Game Title and Scorecard */}
      <h1 className="title">Score Keeper</h1>
      <p className="subtitle">
        First player to reach a score of <span className="target-score">{target}</span> wins!
      </p>

      {/* Player List */}
      <ul className="player-list">
        {scores.map((score, index) => {
          const isWinner = winners.includes(index);
          
          // Conditional classes based on winner status
          const itemClasses = isWinner ? "player-item winner" : "player-item";

          return (
            <li key={index} className={itemClasses}>
              
              {/* Player Name and Score */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className="indicator"></span>
                <span className="player-name">
                  Player {index + 1}:
                </span>
                <span className={`score-value ${isWinner ? 'winner-score' : ''}`}>
                  {score}
                </span>
              </div>

              {/* Actions and Status */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {isWinner && (
                  <span className="winner-badge">
                    🏆 WINNER!
                  </span>
                )}
                
                <button 
                  onClick={() => incrementScore(index)}
                  disabled={isGameOver && !isWinner}
                  className="score-button"
                >
                  +1
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      
      {/* Reset Button */}
      <div className="reset-button-container">
        <button 
          onClick={reset}
          className="reset-button"
          disabled={!scores.some(score => score > 0)}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default ScoreKeeper;
