import '../css/project.css'
import ProjectItem from '../helpers/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'
import { motion } from 'framer-motion'

export const Project = ()=>{
    return (
        <motion.div className="project"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
        >
            <h1>My Personal Project</h1>
            <div className='projectList'>
                {ProjectList.map((project, index)=>{
                    return <ProjectItem id={index} name={project.name} img={project.img} skill={project.skill} />
                })}
            </div>
        </motion.div>
    )
}