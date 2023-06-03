import { Fragment } from 'react';
import './App.css';
import Homeartist from './Artists/Homeartist';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homeartist/>}/>
        </Routes>
        <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;
