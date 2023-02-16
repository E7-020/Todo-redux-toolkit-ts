import Logo from '../../assets/Logo.png';
import Plus from '../../assets/plus.png';
import '../../style/addition.css';
import { useState } from "react";
import { AddTask,DeleteTask } from '../../store/reducers/todos/todoAction';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";


export const Addition = () => {
    const [value,setValue] = useState<string>("")
    const { todos, isLoading } = useAppSelector(state => state.todos)
    const dispatch = useAppDispatch()
    const addTodos = () => {
        dispatch(AddTask(value))
    }
   
  return (
    <div>
      <div className="addition">
        <div className="addition-block">
          <img className="addition-block-img" src={Logo} alt="fdfdfdfd" />
        </div>
        <div className="addition-second-block">
          <span className="addition-second-block-text">by</span>
          <span className="addition-second-block-second-text">unicode </span>
        </div>
      </div>
      <div className="addition-input">
        <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Что вы планируете сделать?" type="text" />
        <div className="addition-third-block">
            <div onClick={addTodos} className='addition-third-block-btn'>
              <p>Добавить</p>  
            </div>
            <div className='addition-third-second-block-btn'>
               {/* <img className="addition-third-block-btn-img" src={Plus} alt="gg" /> */}
               {!isLoading ? <img className="addition-third-block-btn-img" src={Plus} alt="gg" />  : <img src='' alt="" />}
            </div>
        </div>
      </div>
    </div>
  );
};