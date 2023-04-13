import './styles/main.scss';
import FeaturesPage from './components/FeaturesPage';
import PricingPage from './components/PricingPage';
import CommunityPage from './components/CommunityPage';
import SupportPage from './components/SupportPage';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<FeaturesPage />} />
          <Route path='/pricing' element={<PricingPage />} />
          <Route path='/community' element={<CommunityPage />} />
          <Route path='/support' element={<SupportPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
