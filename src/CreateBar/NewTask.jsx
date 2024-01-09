import { useState } from 'react';
import React from 'react';

const NewTask = (props) => {
  console.log('Edutt', props.task);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [remaining, setRemaining] = useState('');
  const [createdDate, setCreatedDate] = useState('');
  const [priority, setPriority] = useState('moderate');

  console.log('Edit', props.details);
  // Name change handling
  const handleNameChange = (e) => {
    if (props.oper === 'Editing') {
      props.updateTrigger.setEditName(e.target.value);
    }
    console.log(e.target.value);
    setName(e.target.value);
  };

  //Decription change handling
  const handleDescriptionChange = (e) => {
    if (props.oper === 'Editing') {
      props.updateTrigger.setEditDescription(e.target.value);
    }
    console.log(e.target.value);
    setDescription(e.target.value);
  };

  //Date and time change handling
  const handleDateChange = (e) => {
    const date = e.target.value;
    const year = date.split('-')[0];
    const month = date.split('-')[1];
    const day = date.split('-')[2];
    setDate(`${day}/${month}/${year}`);
    const inputDate = new Date(year, month - 1, day);
    console.log('input', inputDate);
    const today = new Date();
    const createdDay = today.getDate();
    const createdMonth = today.getMonth() + 1;
    const createdYear = today.getFullYear();
    setCreatedDate(`${createdDay}/${createdMonth}/${createdYear}`);
    console.log('Today', today);
    const remainingDays = Math.ceil(
      (inputDate - today) / (24 * 60 * 60 * 1000)
    );
    console.log('remaining', remainingDays);
    if (remainingDays <= 0) {
      setRemaining(0);
    } else {
      setRemaining(remainingDays);
    }
  };

  //Priority Change Handling
  const handlePriority = (e) => {
    if(props.oper === 'Editing'){
    console.log('Priority inn2', priority);
    props.updateTrigger.setEditPriority(e.target.value);
    }
    setPriority(e.target.value);
  };

  const handleCancel = (e) => {
    if (props.oper === 'Editing') {
      props.setEditTrigger(false);
    } else {
      props.setTrigger(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hjfbhjd', priority);
    if (props.oper === 'Editing') {
      let editTask = props.task.map((e, id) => {
        if (id === props.details.editId) {
          e.name = name || props.details.editName;
          e.description = description || props.details.editDescription;
          e.priority = props.details.editPriority;
          e.date = date;
          e.remaining = remaining;
          // e.createdDate = createdDate
          return e;
        } else {
          return e;
        }
      });
      console.log('Esd', editTask);
      props.updateTrigger.handleUpdateTask(editTask);
      props.setEditTrigger(false);
    } else if (name) {
      console.log('Submiting', name, description, date, time);
      props.setTask([
        ...props.task,
        { name, description, date, time, remaining, createdDate, priority },
      ]);
      console.log('State after setTask', props.task);
      setName('');
      setDescription('');
      setPriority('moderate');
      setDate('');
      setRemaining('');
      props.setTrigger(false);
    } else {
      alert('Cannot submit Empty Task');
    }
  };

  if (props.trigger) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          {/* Name & Description input */}
          <div className="relative">
            <div className="fixed w-[450px] h-[400px] rounded bg-gray-200 p-4 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-md font-robotoCondensed">
              <label htmlFor="task-name" className="">
                Name :{' '}
              </label>
              <input
                type="search"
                id="task-name"
                placeholder="Type your Task..."
                className="w-72 p-1"
                value={props.oper === 'Editing' ? props.details.editName : name}
                onChange={handleNameChange}
                autoComplete="off"
              ></input>
              <div className="mt-2">
                <label htmlFor="description">Description :</label>
                <textarea
                  type="text"
                  id="description"
                  className="w-full h-36 mt-2 resize-none"
                  value={
                    props.oper === 'Editing'
                      ? props.details.editDescription
                      : description
                  }
                  onChange={handleDescriptionChange}
                  autoComplete="off"
                ></textarea>

                {/* Date & time input */}
                <label htmlFor="date-time" className="mt-2">
                  Due Date :
                </label>
                <input
                  type="date"
                  id="date-time"
                  onChange={handleDateChange}
                  className="mt-2 ml-2 p-1"
                  defaultValue={
                    props.oper === 'Editing' &&
                    props.details.editDate &&
                    props.details.editedDate
                  }
                ></input>
                <input
                  type="time"
                  id="time"
                  onChange={(e) => setTime(e.target.value)}
                  className="mt-2 ml-2 p-1"
                ></input>

                {/* Priority box */}
                <div className="flex mt-4 gap-4">
                  <p>Priority : </p>
                  <div>
                    {' '}
                    <input
                      type="radio"
                      id="high"
                      name="option"
                      value={'high'}
                      className="peer hidden"
                      onChange={handlePriority}
                      checked={
                        props.oper === 'Editing'
                          ? props.details.editPriority === 'high'
                            ? true
                            : false
                          : priority === 'high'
                          ? true
                          : false
                      }
                    ></input>
                    <label
                      htmlFor="high"
                      className="text-gray-500  rounded-full w-20 p-[1px] flex justify-center  border-black border-[1px] hover:bg-gray-200 hover:text-black peer-checked:bg-red-500 peer-checked:text-white peer-checked:border-none cursor-pointer transition-shadow hover:shadow-lg hover:bg-red-500 hover:text-white hover:border-none"
                    >
                      High
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="moderate"
                      name="option"
                      value={'moderate'}
                      className="peer hidden"
                      onChange={handlePriority}
                      checked={
                        props.oper === 'Editing'
                          ? props.details.editPriority === 'moderate'
                            ? true
                            : false
                          : priority === 'moderate'
                          ? true
                          : false
                      }
                      onClick={console.log('Hiiiii')}
                    ></input>
                    <label
                      htmlFor="moderate"
                      className="text-gray-500  rounded-full w-24 p-[1px] flex justify-center  border-black border-[1px] hover:bg-gray-200 hover:text-black peer-checked:bg-yellow-500 peer-checked:text-white peer-checked:border-none cursor-pointer transition-shadow hover:shadow-lg hover:bg-yellow-500 hover:text-white hover:border-none"
                    >
                      Moderate
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="low"
                      name="option"
                      value={'low'}
                      className="peer hidden"
                      onChange={handlePriority}
                      checked={
                        props.oper === 'Editing'
                          ? props.details.editPriority === 'low'
                            ? true
                            : false
                          : priority === 'low'
                          ? true
                          : false
                      }
                      onClick={console.log('Hiiiii22')}
                    ></input>
                    <label
                      htmlFor="low"
                      className="text-gray-500  rounded-full w-20 p-[1px] flex justify-center  border-black border-[1px] hover:bg-gray-200 hover:text-black peer-checked:bg-green-500 peer-checked:text-white peer-checked:border-none cursor-pointer transition-shadow hover:shadow-lg hover:bg-green-500 hover:text-white hover:border-none"
                    >
                      Low
                    </label>
                  </div>
                </div>
                {/* Cancel & Create Button */}
                <div className="absolute bottom-4 right-4">
                  <button
                    className="rounded-full w-[65px] bg-gray-400 p-1"
                    type="button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-full w-[65px] p-1 mx-2 bg-violet-700 text-white"
                  >
                    {props.oper === 'Editing' ? 'Update' : 'Sumbit'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default NewTask;
