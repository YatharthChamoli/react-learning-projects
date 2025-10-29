import { useState} from 'react';


function generateGameboard() {
  console.log("Making the initial gameboard");
  return Array(5000);

}

export default function Dumbo() {
    const [board, setBoard] = useState(generateGameboard);
    return(
      <button onClick={() => setBoard("hello")}>Click me to change state</button>
    ) 
}