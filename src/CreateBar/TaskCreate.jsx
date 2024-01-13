import { useEffect, useState } from 'react';
import NewTask from './NewTask';
import TaskContainer from '../TaskCreation/TaskBox';
import ParameterBox from '../Parameters/ParameterBox';
import ThemeChange from './ThemeChange'; 

const CreateTask = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [isTaskContainer, setIsTaskContainer] = useState(false);
  const [task, setTask] = useState(() => {
    const storedArray = localStorage.getItem('task');
    return storedArray ? JSON.parse(storedArray) : [];
  });

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(task));
    console.log('TaskCreate', task);
  }, [task]);

  return (
    <div>
      <div className="flex justify-between">
        <button
          className="mx-2 rounded-full w-20 border-black dark:border-[#EEEEE] border-[1px] hover:bg-[#3F72AF] hover:text-white hover:border-[#3F72AF] dark:hover:bg-[#00ADB5] dark:hover:text-white dark:hover:border-[#00ADB5]"
          onClick={() => setButtonPopup(!buttonPopup)}
        >
          Create +
        </button>
        <ThemeChange />
      </div>
      <ParameterBox />
      <NewTask
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        setTaskTrigger={setIsTaskContainer}
        setTask={setTask}
        task={task}
      />
      <TaskContainer trigger={isTaskContainer} setTask={setTask} task={task} />
    </div>
  );
};

export default CreateTask;
