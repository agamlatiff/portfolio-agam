
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TestAIPage from './pages/TestAIPage';

// UI Utils
import BackToTop from './components/ui/BackToTop';
import FloatingContact from './components/ui/FloatingContact';
import ChatWidget from './components/ui/ChatWidget';
import ScrollToTop from './components/utils/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 font-sans selection:bg-primary/20 selection:text-primary-hover transition-colors duration-300 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home onOpenChat={() => setIsChatOpen(true)} />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage onOpenChat={() => setIsChatOpen(true)} />} />
              <Route path="/test-ai" element={<TestAIPage />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
          <FloatingContact />
          <ChatWidget isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
