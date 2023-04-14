import  Link  from 'next/link'


const NavBar = () => {
   return (
      <div className="nav-bar">
       <Link href='/' className='navbar-logo'> </Link>


         

         <nav className='navbar-menu'>
            <ul className='menu-list'>
               <li>
                  <Link href="/FeaturesPage">headphones</Link>
               </li>
               <li>
                  <Link href="/PricingPage">speakers</Link>
               </li>
               <li>
                  <Link href="/CommunityPage">earphones</Link>
               </li>
              

            </ul>
         </nav>

         <div className="navbar-panel">
            <button className="panel-login">Cart</button>
            
         </div>
      </div>
   );
}

export default NavBar;