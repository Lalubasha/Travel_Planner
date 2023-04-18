import {components} from "react";
import "./NavbarStyles.css";

class Navbar extends components{
    render(){
        return(
            <nav className="NavbarItems">
            <h1 className="navbar-logo">AmuseTravel</h1>
            <ul className="nav-menu">
            <li>
            <link>Home</link>
            <link></link>
            </li>
            </ul>
            </nav>
        )
    }
}