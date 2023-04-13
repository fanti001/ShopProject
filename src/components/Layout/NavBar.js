import  Link  from 'next/link'


const NavBar = () => {
   return (
      <div className="nav-bar">
         <div className='navbar-logo'>
         </div>

          <nav className='navbar-menu'>
              <ul className='menu-list'>
                  <li>
                  <Link href="/">Home</Link>
                  </li>
                  <li>
                  <Link href="/FeaturesPage">Features</Link>
               </li>
               <li>
                  <Link href="/PricingPage">Pricing</Link>
               </li>
               <li>
                  <Link href="/CommunityPage">Community</Link>
               </li>
               <li>
                  <Link href="/SupportPage">Support</Link>
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
