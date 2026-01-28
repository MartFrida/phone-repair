import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ServicePage from './pages/ServicePage';
import HomePage from './pages/HomePage';

export default function App () {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reparar/:servicio" element={<ServicePage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}
