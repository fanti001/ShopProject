import NavBar from './NavBar';
import Footer from './Footer';
import Cart from './Cart/Cart';


function Layout(props) {
  return (
    <div>
      <NavBar />
      <Cart />
      <main >{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
