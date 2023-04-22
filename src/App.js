import './App.css';
import {Switch, Route} from 'react-router-dom'

import Homepage from './Components/HomePage';
import Tasks from './Components/Tasks';
import Employees from './Components/Employees'; // done
import Employee from './Components/Employee'; // done
import EditEmployee from './Components/EditEmployee'; // done
import EmployeeNewTask from './Components/EmployeeNewTask';
import NewEmployees from './Components/NewEmployee'; //done
import NewTask from './Components/NewTask';
import EditTask from './Components/EditTask';
import Task from './Components/Task';
import Orders from './Components/Orders'
import NewOrder from './Components/NewOrder';
import EditOrder from './Components/EditOrder';

const App = () => {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component = {Homepage} />
      <Route exact path="/tasks" component={Tasks} />
      <Route exact path="/tasks/:id" component={Task} />
      <Route exact path="/employees" component={Employees} />
      <Route exact path="/newemployee" component={NewEmployees}/>
      <Route exact path="/employees/:id" component={Employee} />
      <Route exact path="/editemployee/:id" component={EditEmployee} />
      <Route exact path="/employees/:id/newtask" component={EmployeeNewTask} />
      <Route exact path="/newtask" component={NewTask} />
      <Route exact path="/edittask/:id" component={EditTask}/>
      <Route exact path="/editorder/:id" component={EditOrder}/>
      <Route exact path="/orders" component={Orders}/>
      <Route exact path="/neworder" component={NewOrder}/>
      </Switch>
    </div>
  );
}

export default App;
