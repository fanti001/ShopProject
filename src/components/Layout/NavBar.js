import Link from 'next/link'


const NavBar = () => {
   return (
      <div className="nav-bar">
         <div className="nav-bar__menu-button">

         </div>

         {/* <nav className='navbar-menu'>
            <ul className='menu-list'>
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
         </nav> */}
         <div className='nav-bar__logo'>
            <h1>audiophile</h1>
         </div>

         <div className="nav-bar__cart">

         </div>
      </div>
   );
}

export default NavBar;