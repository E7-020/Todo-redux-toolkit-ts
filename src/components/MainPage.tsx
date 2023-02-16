import { AddForm } from "./additionalСomponents/AddForm";
import { TaskList } from "./additionalСomponents/TaskList";

export const Todos = () => {

  return (
    
    <div className="container">
        
        <AddForm  />
        <TaskList/>
        
    </div>
  );
};

export default Todos;
