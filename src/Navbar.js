import { Link } from "react-router-dom";
import './css/navbar.css'

export const Navbar = ()=>{
    return (
        <div>
            <nav>
                <ul>
                    <li> <Link to='/'>Home</Link> </li>
                    <li> <Link to='/project'>Project</Link> </li>
                    <li> <Link to='/experience'>experience</Link> </li>
                </ul>
            </nav>
        </div>
    );
}