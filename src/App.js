import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './Navbar'
import Footer from './Footer';
import PathMotion from './helpers/PathMotion';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <PathMotion />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
