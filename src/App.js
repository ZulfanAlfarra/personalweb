import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar'
import { Home } from './pages/Home'
import { Project } from './pages/Project'
import Experience from './pages/Experience';
import Footer from './Footer';
import DetailProject from './pages/DetailProject';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/project/:id' element={<DetailProject />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
