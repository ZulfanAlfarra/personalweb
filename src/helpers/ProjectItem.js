import React from 'react'
import { useNavigate } from 'react-router-dom' 

const ProjectItem = ({img, name, skill, id}) => {
  const navigate = useNavigate();
  return (
    <div className='projectItem' onClick={() => {
      navigate('/personalweb/project/' + id)
    }}>
        <div style={{backgroundImage: `url(${img})`}} className='bgImage' />
        <h2>{name}</h2>
    </div>
  )
}

export default ProjectItem