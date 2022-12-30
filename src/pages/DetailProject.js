import React from 'react'
import {useParams} from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';

const DetailProject = () => {
    const { id } = useParams();
    const project = ProjectList[id];
  return (
    <div className='details'>
        <h1>{project.name}</h1>
        <img src={project.img} />
        <p><span>Skill :</span> {project.skill}</p>
        <a href={project.github} target='_blank'> <GitHubIcon fontSize='large'/> </a>
    </div>
  )
}

export default DetailProject