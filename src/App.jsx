import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AnalystAgent from './pages/AnalystAgent';
import CreatorAgent from './pages/CreatorAgent';
import PlannerAgent from './pages/PlannerAgent';
import ProspectorAgent from './pages/ProspectorAgent';
import WhatsappAgent from './pages/WhatsappAgent';
import CaseStudies from './pages/CaseStudies';
import Resources from './pages/Resources';
import Services from './pages/Services';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/agents/analyst" element={<AnalystAgent />} />
          <Route path="/agents/creator" element={<CreatorAgent />} />
          <Route path="/agents/planner" element={<PlannerAgent />} />
          <Route path="/agents/prospector" element={<ProspectorAgent />} />
          <Route path="/agents/whatsapp" element={<WhatsappAgent />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/services" element={<Services />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
