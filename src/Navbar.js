import { Link } from "react-router-dom";
import './css/navbar.css'

export const Navbar = ()=>{
    return (
        <div>
            <nav>
                <ul>
                    <li> <Link to='/personalweb/'>Home</Link> </li>
                    <li> <Link to='/personalweb/project'>Project</Link> </li>
                    <li> <Link to='/personalweb/experience'>experience</Link> </li>
                </ul>
            </nav>
        </div>
    );
}