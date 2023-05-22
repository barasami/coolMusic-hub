import { Fragment } from 'react';
import './App.css';
import Homeartist from './Artists/Homeartist';
import Billhome from './Billboard/Billhome';
import Lyrichome from './Lyric/Lyrichome';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homeartist/>}/>
          <Route path='/Bil' element={<Billhome/>}/>
          <Route path='/Lyric' element={<Lyrichome/>}/>
        </Routes>
        <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;
