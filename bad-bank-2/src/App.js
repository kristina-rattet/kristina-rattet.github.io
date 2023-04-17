
import { Navbar } from 'react-bootstrap';
//import Navbar from './components/Navbar';
import { Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact />

      </Routes>
      </Router>
</>
  );
}

export default App;
