
import './Navbar.css'
import logo from '../../assets/Images/logo.svg'

const Navbar = () => {
    return (
        <div className=' navbar-container' >
            <div className="navbar " >
               <div id='logo-container'>
                <img  src={logo} id='logo-image'></img>
                <h1 className=' text-xl md:text-2xl lg:text-3xl text-white font-semibold'>Nexthome</h1>
            </div> 

    <div id='nav-menu'>
       <ul className="nav-items">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Sectors</a></li>
        <li><a href="/contact">Projects</a></li>
        <li>
        <button className=' border-black px-6 py-1.5 rounded-full bg-black font-medium text-xl '>Contact</button>
        </li>
       
         </ul>
            </div>
            </div>
        </div>
    );
};

export default Navbar;