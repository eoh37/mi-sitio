
import './App.css';
//import Footer from './components/Footer';
//import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectPage from './pages/ProjectPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutPage from './pages/LayoutPage';

function App() {

  return (
    <div>

      <main>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<LayoutPage />} >
              <Route path='home' element={<HomePage />} />
              <Route path='contact' element={<ContactPage />} />
              <Route path='portfolio' element={<PortfolioPage />} />
              <Route path='projects' element={<ProjectPage />} />

            </Route>
          </Routes>
        </BrowserRouter>

      </main>

    </div >
  );
}

export default App;
