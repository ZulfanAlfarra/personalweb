import '../css/home.css'
import profile from '../img/profile.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from "framer-motion"

export const Home = ()=>{
    return (
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
        >

            <div className='home'>
                <div className='describe'>
                    <h1>Hello, I'am Zulfan</h1>
                    <p>A software developer with a passion for learning and creating</p>
                    <div className='sosmed'>
                        <a href='mailto: zulfansyahidanalfarra.91@gmail.com' target='_blank'> <EmailIcon fontSize='large'/> </a>
                        <a href='https://github.com/ZulfanAlfarra' target='_blank'> <GitHubIcon fontSize='large'/> </a>
                        <a href='#' target='_blank'> <LinkedInIcon fontSize='large'/> </a>
                    </div>
                </div>
                <div className='fotoProfile'>
                    <img src={profile} alt='foto profile' />
                </div>               
            </div>

            <div className='skill'>
                <h1>skills</h1>
                <div className='skills'>
                    <div className='card-skill'>
                        <h2>frontend :</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>NPM</li>
                            <li>Bootstrap</li>
                            <li>TailwindCSS</li>           
                        </ul>
                    </div>
                    <div className='card-skill'>
                        <h2>backend :</h2>
                        <ul>
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                    <div className='card-skill'>
                        <h2>languanges :</h2>
                        <ul>
                            <li>JavaScript</li>
                            <li>Pyhton</li>
                            <li>C</li>
                            <li>C++</li>
                            <li>PHP</li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

