import './App.css';
import {Switch, Route} from 'react-router-dom'

import Homepage from './Components/HomePage';
const App = () => {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component = {Homepage} />
      </Switch>
    </div>
  );
}

export default App;
