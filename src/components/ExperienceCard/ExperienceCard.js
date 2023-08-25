import React from 'react'
import "../../dist/css/Experience.css"

function ExperienceCard(props) {
  return (
    <React.Fragment>
        <div className='exp-card'>
            <div className='job-title'>
                <img src={props.src}></img>
                <h1>{props.name}</h1>
            </div>
            <div className='job-desc'>
                {
                    props.list.map((list) => {
                        return (
                            <h1>{list}</h1>
                        )
                    })
                }
            </div>
        </div>
    </React.Fragment>
  )
}

export default ExperienceCard