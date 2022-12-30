import '../css/project.css'
import ProjectItem from '../helpers/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'

export const Project = ()=>{
    return (
        <div className="project">
            <h1>My Personal Project</h1>
            <div className='projectList'>
                {ProjectList.map((project, index)=>{
                    return <ProjectItem id={index} name={project.name} img={project.img} skill={project.skill} />
                })}
            </div>
        </div>
    )
}