import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Domains from './pages/Domains';
import HallOfFame from './pages/HallOfFame';
import Opportunities from './pages/Opportunities';
import Marketplace from './pages/Marketplace';
import Events from './pages/Events';
import Training from './pages/Training';
import News from './pages/News';
import Register from './pages/Register';
import Contact from './pages/Contact';
import IPRights from './pages/IPRights';
import Partnerships from './pages/Partnerships';
import Admin from './pages/Admin';
import { ModalProvider } from './contexts/ModalContext';
import { Toaster } from './components/ui/toaster';
import './App.css';

function App() {
  return (
    <ModalProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/hall-of-fame" element={<HallOfFame />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/events" element={<Events />} />
            <Route path="/training" element={<Training />} />
            <Route path="/news" element={<News />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ip-rights" element={<IPRights />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/admin/*" element={<Admin />} />
          </Routes>
        </Layout>
        <Toaster />
      </Router>
    </ModalProvider>
  );
}

export default App;