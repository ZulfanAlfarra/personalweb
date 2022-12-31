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
          <Route path='/personalweb' element={<Home />} />
          <Route path='/personalweb/project' element={<Project />} />
          <Route path='/personalweb/project/:id' element={<DetailProject />} />
          <Route path='/personalweb/experience' element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
