import './App.css';
import {Switch, Route} from 'react-router-dom'

import Homepage from './Components/HomePage';
import Tasks from './Components/Tasks';
const App = () => {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component = {Homepage} />
      <Route exact path="/tasks" component={Tasks} />
      </Switch>
    </div>
  );
}

export default App;
