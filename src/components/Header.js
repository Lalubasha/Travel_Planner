import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {

        const [showMenu,setShowMenu] = useState(false);
    return( 
    <header className="header" id="header">
    <nav className="nav container">
      <Link to="/" className="nav__logo">TraV<span>pln</span></Link>

      <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link active">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">About</Link>
          </li>
          <li className="nav__item">
            <Link to="/tour-package" className="nav__link">Tour Package</Link>
          </li>
        </ul>
      </div>

      <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
        <i className="bx bx-menu"></i>
      </div>
    </nav>
    </header>
        

    );
}
export default Header;