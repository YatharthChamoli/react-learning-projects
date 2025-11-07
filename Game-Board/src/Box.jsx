import './Box.css'
import {useState} from 'react';  

function Box() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive(!isActive); 
  return (
    <div className="Box" onClick={toggleActive} style={{backgroundColor: isActive ? "red" : "black"}}>

    </div>
  )
}

export default Box;