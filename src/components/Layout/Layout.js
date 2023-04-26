import NavBar from './NavBar';
import Footer from './Footer';



function Layout(props) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <NavBar />

      <main >{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
