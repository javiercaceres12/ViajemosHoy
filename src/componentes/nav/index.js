import { Link } from "react-router-dom";
import  Logo  from '../../logo.svg' 
const Nav = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="">
            <img className="mx-3" src={Logo} alt="logo" width={"30"} height={"30"} />
            </Link>
        <nav>
        <ul className="d-flex text-dark list-unstyled bg-info rounded-start my-2">
             <li className="nav-item"> <Link className="nav-link text-dark p-2" to="/inicio">Inicio</Link> </li>
             <li className="nav-item"> <Link className="nav-link text-dark p-2" to="/hoteles">Hoteles</Link> </li>
             <li className="nav-item"> <Link className="nav-link text-dark p-2" to="/paquetes">Paquetes</Link> </li>
             
        </ul>            
        </nav>
        </div>

    )
}

export default Nav;