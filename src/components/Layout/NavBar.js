import Link from 'next/link'


const NavBar = () => {
   return (
      <div className="nav-bar">
         <div className="nav-bar__menu-button">

         

         {/* <nav className='navbar-menu'>
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