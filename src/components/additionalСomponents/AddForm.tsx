import Logo from '../../assets/Logo.png';
import Plus from '../../assets/plus.png';
import '../../style/add-form.css';
import { useState } from "react";
import { AddTask } from '../../store/reducers/todo/todoAction';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";


export const AddForm = () => {
    const [value,setValue] = useState<string>("")

    const {  isLoading } = useAppSelector(state => state.todos)

    const dispatch = useAppDispatch()

    const addTodos = () => {
        dispatch(AddTask(value))
        setValue("")
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
               {!isLoading ? <img className="addition-third-block-btn-img" src={Plus} alt="gg" />  : <span className='circle'>.</span>}
            </div>
        </div>
      </div>
    </div>
  );
};