import './App.css';
import HedgeSimpleML from './components/HedgeSimpleML.js';
import HedgeSimpleSpread from './components/HedgeSimpleSpread';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/moneyline-hedge-simple" component={HedgeSimpleML}/>
      <Route exact path="/spread-hedge-simple" component={HedgeSimpleSpread}/>

    </div>
    </Router>
  );
}

export default App;
