import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { RiDeleteBin2Line, RiEdit2Line } from 'react-icons/ri'
const TasksView = ({ tasks, deleteTask }) => {
    return (
      <div>
        <div className="all-tasks">
          <div className="header">
            <h1>Manage Tasks</h1>
            <div className="notice">
            </div>
          </div>
          <div>
            <table>
              <tbody>
                <tr>
                  <th>Tasks</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Due Date</th>
                  <th>Comments</th>
                  <th>Actions</th>
                </tr>
                {tasks.map(task => {
                  return (
                    <tr key={task.id}>
                      <td>{task.id}</td>
                      <td>
                        <Link className="link" to={`/tasks/${task.id}`}>
                          {task.description}
                        </Link>
                      </td>
                      <td>{task.completion_status}</td>
                      <td>{task.due_date}</td>
                      <td>{task.comments}</td>
                      <td>
                        <div className="action-button-wrap">
                          <button
                            onClick={() => deleteTask(task.id)}
                            className="delete-button"
                          >
                            <RiDeleteBin2Line size={20} />
                          </button>
  
                          <Link className="link" to={`/tasks/${task.id}`}>
                            <button
                              style={{ 
                                backgroundColor: '#0818A8', 
                                width: '3rem', 
                                padding: '3px', 
                                borderRadius: '5px'}}
                              >
                                <RiEdit2Line size={20} />
                            </button>
                          </Link>
                        </div>
  
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
  
        <div className="buttons-wrap">
          <Link to={`/newtask`}>
            <button>
              Add New Task
            </button>
          </Link>
        </div>
        
      </div>
    )
  }
  
  export default TasksView