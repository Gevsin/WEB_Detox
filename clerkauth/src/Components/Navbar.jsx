import '../CSS/Navbar.css';
import LOGO from '../Images/LOGO.png';


const Navbar = () => {


    return (

        <nav className="navbar">
            <div className="logo">
                <img src={LOGO} alt="Logo" />
                <span className="logo-text">Clerk</span>
            </div>

            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

        </nav>
    );

};

export default Navbar;