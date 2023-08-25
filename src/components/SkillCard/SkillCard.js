import React from 'react'
import "../../dist/css/SkillCard.css"

function SkillCard(props) {
  return (
    <React.Fragment>
        <div className='skill-card'>
            <h3>{props.name}</h3>
            <img src={props.src}></img>
        </div>
    </React.Fragment>
  )
}

export default SkillCard