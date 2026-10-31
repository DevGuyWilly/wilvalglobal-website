import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Sell from './pages/Sell';
import Partner from './pages/Partner';
import About from './pages/About';
import Polythene from './pages/Polythene';
import Community from './pages/Community';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sell" element={<Sell />} />
        <Route path="partner" element={<Partner />} />
        <Route path="about" element={<About />} />
        <Route path="polythene" element={<Polythene />} />
        <Route path="community" element={<Community />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
