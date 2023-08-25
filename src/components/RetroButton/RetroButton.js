import React from 'react'
import "../../dist/css/RetroButton.css"

function RetroButton(props) {
  return (
    <React.Fragment>
        <button className='retro' onClick={props.function}>
            {props.name}
        </button>
    </React.Fragment>
  )
}

export default RetroButton