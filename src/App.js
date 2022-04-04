import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
// COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
// PAGES
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';

const App = () => {
  React.useEffect(() => {
    document.querySelector('title').textContent = 'Gabriel Tomsic';
  }, []);
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
