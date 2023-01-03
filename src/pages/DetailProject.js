import React from 'react'
import {useParams} from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';

const DetailProject = () => {
    const { id } = useParams();
    const project = ProjectList[id];
  return (
    <motion.div className='details'
      initial={{width:0}}
      animate={{width:'100%'}}
      exit={{width:'100%'}}
      transition={{duration:0.8}}
    >
        <h1>{project.name}</h1>
        <img src={project.img} />
        <p><span>Skill :</span> {project.skill}</p>
        <a href={project.github} target='_blank'> <GitHubIcon fontSize='large'/> </a>
    </motion.div>
  )
}

export default DetailProject