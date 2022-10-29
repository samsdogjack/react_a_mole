import {useEffect} from 'react'
//import moleImg from './Images/mole.png'
import moleImg from './Images/molehill.png'

function Mole(props){
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={moleImg}
            onClick={props.handleClick} />
        </div>
    )
}



function MoleContainer(props) {
  return (
    <div>
      <h2>MoleContainer</h2>
    </div>
  )
}

export default MoleContainer