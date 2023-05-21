import './App.css';
import Homeartist from './Artists/Homeartist';
import Billhome from './Billboard/Billhome';
import Lyrichome from './Lyric/Lyrichome';

function App() {
  return (
    <div className="App">
      <Homeartist/>
      <Billhome/>
      <Lyrichome/>
    </div>
  );
}

export default App;
