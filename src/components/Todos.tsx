import Connection from "../connection/connection";
import { Addition } from "./additionalСomponents/Addition";
import { TaskList } from "./additionalСomponents/TaskList";


export const Todos = () => {
    
  return (
    
    <div className="container">
        
        <Addition/>
        <TaskList/>
        <Connection/>
    </div>
  );
};

export default Todos;
