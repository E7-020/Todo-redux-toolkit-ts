import '../../style/task-list.css';
import Clipboard from '../../assets/Clipboard.png';

import { useEffect, useState} from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { checkbox, getTodos } from "../../store/reducers/todo/todoAction";
import '../../style/task-list.css';
import Trash from '../../assets/trash.png';
import { DeleteTask } from "../../store/reducers/todo/todoAction";
import { ITodos } from '../../types/ITodo';


export const TaskList = () => {
  const dispatch = useAppDispatch()
  const { todos, isLoading } = useAppSelector(state => state.todos)
  const completedTodos = todos.filter(todos => todos.completed)
  

  useEffect(() => {
      dispatch(getTodos())
  },[])
  
  const removeTask = (id:string) => {
      dispatch(DeleteTask(id))
  }

  const updateTodo = (todo: ITodos) => {
    dispatch(checkbox(todo))
  }
  
  if(isLoading){
      <div className="lds-hourglass"></div>
  }

  return (
    <div>
      <div className="task-process">
            <div className="task-process-total">
            <span className="task-process-total-text">Всего задач</span>
            <div className='task-process-total-block'>
                <span className="task-process-total-block-number">{todos.length}</span>
            </div>
            
            </div>
            <div className="task-process-done">
            <span className="task-process-done-text">Выполнено</span>
            <div className='task-process-done-block'>
               <span className="task-process-done-block-number"> {completedTodos.length} из {todos.length}</span> 
            </div>
            
            </div>
      </div>
    

      {!todos.length ? 
      <div className='task-list'>
        <img className='task-list-img' src={Clipboard} alt="" />
        <p className='task-list-text'>У вас пока нет добавленных задач</p>
      </div>
       : 
        <div className="content">
            {todos.map((item) => (
                <div key={item._id} className="content-block">
                    <label className="checkbox style-d" onClick={() => updateTodo(item)}>
                        <input  type="checkbox" checked={item.completed}/>
                        <div className="checkbox__checkmark"></div>
                    </label>
                    <p className="content-block-text">{item?.title}</p>
                    <div onClick={() => removeTask(item._id)} className="content-block-basket">
                        {!isLoading ? <img className='content-block-basket-img' src={Trash} alt="" /> : <span>.</span> }
                    </div>
                </div>
            ))}
        </div>
    }
        

    </div>
  );
};
