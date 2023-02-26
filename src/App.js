import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from './Components/HomePage';
const App = () => {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" Components = {HomePage} />
      </Switch>
    </div>
  );
}

export default App;
