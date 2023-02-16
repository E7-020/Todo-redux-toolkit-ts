import '../../style/task-list.css';
import Clipboard from '../../assets/Clipboard.png';
export const TaskList = () => {
  return (
    <div>
      <div className="task-process">
            <div className="task-process-total">
            <span className="task-process-total-text">Всего задач</span>
            <div className='task-process-total-block'>
                <span className="task-process-total-block-number">0</span>
            </div>
            
            </div>
            <div className="task-process-done">
            <span className="task-process-done-text">Выполнено</span>
            <div className='task-process-done-block'>
               <span className="task-process-done-block-number">0</span> 
            </div>
            
            </div>
      </div>
      {/* <div className='task-list'>
        <img className='task-list-img' src={Clipboard} alt="" />
        <p className='task-list-text'>У вас пока нет добавленных задач</p>
      </div> */}


    </div>
  );
};
