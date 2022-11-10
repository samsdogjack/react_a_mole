import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

const MoleContainer = (props) => {
    let [theMole, setTheMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }

    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer


// function MoleContainer() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>MoleContainer {count times</p>
//       <button onClick={() => setCount{count + 1)}>
//       Click Me
//       </button>
//       </div>
//   );
// }

//export default MoleContainer