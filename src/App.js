import logo from './logo.svg';
import './App.css';
import Scorecard from './Scorecard';
import swans from './swans.jpg';
import eagles from './eagles.png'


function App() {
  return (
    <div>
      <header className="App-header">
          AFL Scorecard - Grand Final 2005
      </header>
      <Scorecard
          Logo1 = {swans}
          Team1 = "Swans"
          Logo2 = {eagles}
          Team2 = "Eagles"
      />
    </div>
  );
}

export default App;
