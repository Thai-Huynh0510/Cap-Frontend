import './App.css';
import {Switch, Route} from 'react-router-dom'

import Homepage from './Components/HomePage';
import Tasks from './Components/Tasks';
import Employees from './components/Employees';

const App = () => {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component = {Homepage} />
      <Route exact path="/tasks" component={Tasks} />
      <Route exact path="/employees" component={Employees} />
      </Switch>
    </div>
  );
}

export default App;
