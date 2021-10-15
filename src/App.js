import logo from './logo.svg';
import './App.css';
import Scorecard from './Scorecard';
import swans from './swans.jpg';
import eagles from './eagles.png'
import afl from './afl.png'


function App() {
  return (
    <div>
      <header className="App-header">
        <h1 style={{backgroundColor: "white", padding: "5px"}}>AFL Scorecard — Grand Final 2005</h1>
      </header>
      <img src={afl} className="Football1" />
      <img src={afl} className="Football2" />
      <img src={afl} className="Football3" />
      <img src={afl} className="Football4" />
      <img src={afl} className="Football5" />
      <img src={afl} className="Football6" />
      <img src={afl} className="Football7" />
      <img src={afl} className="Football8" />
      <img src={afl} className="Football9" />
      <img src={afl} className="Football10" />
      <img src={afl} className="Football11" />
      <img src={afl} className="Football12" />
      <img src={afl} className="Football13" />
      <img src={afl} className="Football14" />
      <img src={afl} className="Football15" />
      <img src={afl} className="Football16" />
      <div className="Scorecard-Flex">
        <div style={{backgroundColor: "white"}}>
          <Scorecard
              Logo1 = {swans}
              Team1 = "Swans"
              Logo2 = {eagles}
              Team2 = "Eagles"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
