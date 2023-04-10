import './styles/main.scss';
import NavBar from './components/NavBar';
import VideoSection from './components/VideoSeciton';
import Products from './components/Products';
import Newsletter from './components/Newsletter';
import ProductsSoon from './components/ProductsSoon';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <NavBar />
      <VideoSection />
      <Products />
      <Newsletter />
      <ProductsSoon />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
