import './App.css';
import {Switch, Route} from 'react-router-dom'

import Homepage from './Components/HomePage';
import Tasks from './Components/Tasks';
import Employees from './Components/Employees';
import NewTask from './Components/NewTask';
import NewEmployees from './Components/NewEmployee';

const App = () => {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component = {Homepage} />
      <Route exact path="/tasks" component={Tasks} />
      <Route exact path="/employees" component={Employees} />
      <Route exact path="/newtask" component={NewTask} />
      <Route exact path="/newemployee" component={NewEmployees}/>
      </Switch>
    </div>
  );
}

export default App;
