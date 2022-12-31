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
          <Route path='https://zulfanalfarra.github.io/personalweb/' element={<Home />} />
          <Route path='https://zulfanalfarra.github.io/personalweb/project' element={<Project />} />
          <Route path='https://zulfanalfarra.github.io/personalweb/project/:id' element={<DetailProject />} />
          <Route path='https://zulfanalfarra.github.io/personalweb/experience' element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
