import { Link } from 'react-router-dom'


const NavBar = () => {
   return (
      <div className="nav-bar">
         <div className='navbar-logo'>


         </div>

         <nav className='navbar-menu'>
            <ul className='menu-list'>
               <li>
                  <Link to="/">Features</Link>
               </li>
               <li>
                  <Link to="/pricing">Pricing</Link>
               </li>
               <li>
                  <Link to="/community">Community</Link>
               </li>
               <li>
                  <Link to="/support">Support</Link>
               </li>

            </ul>
         </nav>

         <div className="navbar-panel">
            <button className="panel-login">Log in</button>
            <button className="panel-register">Register</button>
         </div>
      </div>
   );
}

export default NavBar;