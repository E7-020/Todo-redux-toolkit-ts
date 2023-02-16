import { useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getTodos } from "../store/reducers/todos/todoAction";
import '../style/connection.css';
import Trash from '../assets/trash.png';
import { DeleteTask } from "../store/reducers/todos/todoAction";




const Connection = () => {
    const dispatch = useAppDispatch()
    const { todos, isLoading } = useAppSelector(state => state.todos)
    

    useEffect(() => {
        dispatch(getTodos())
    },[])
    
    const removeTask = (id:string) => {
        dispatch(DeleteTask(id))
    }
    
    if(isLoading){
        <div className="lds-hourglass"></div>
    }

    return(
        <div className="content">
            {todos.map((item) => (
                <div key={item._id} className="content-block">
                    <input className="content-block-input"  type="checkbox" />
                    <p className="content-block-text">{item?.title}</p>
                    <div onClick={() => removeTask(item._id)} className="content-block-basket">
                        <img  src={Trash} alt="" />
                    </div>
                </div>
            ))}
        </div>
    )
}


export default Connection;

