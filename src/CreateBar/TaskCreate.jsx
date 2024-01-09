import { useEffect, useState } from 'react';
import NewTask from './NewTask';
import TaskContainer from '../TaskCreation/TaskBox';
import ParameterBox from '../Parameters/ParameterBox';
const CreateTask = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [isTaskContainer, setIsTaskContainer] = useState(false);
  const [task, setTask] = useState(() => {
    const storedArray = localStorage.getItem('task');
    return storedArray ? JSON.parse(storedArray) : [];
  });


  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(task));
    console.log('TaskCreate',task)
  },[task]);

  return (
    <div>
      <button
        className="text-gray-500 mx-2 rounded-full w-20 border-black border-[1px] hover:bg-gray-200 hover:text-black"
        onClick={() => setButtonPopup(!buttonPopup)}
      >
        Create +
      </button>
      <ParameterBox />
      <NewTask
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        setTaskTrigger={setIsTaskContainer}
        setTask={setTask}
        task={task}
      />
      <TaskContainer
        trigger={isTaskContainer}
        setTask={setTask}
        task={task}
      />
    </div>
  );
};

export default CreateTask;
