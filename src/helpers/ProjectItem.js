import React from 'react'

const ProjectItem = ({img, name}) => {
  return (
    <div className='projectItem'>
        <div style={{backgroundImage: `url(${img})`}} className='bgImage' />
        <h2>{name}</h2>
    </div>
  )
}

export default ProjectItem