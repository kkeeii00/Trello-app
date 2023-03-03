import React from "react";
import {v4 as uuid} from 'uuid' 

const TaskAddInput = ({inputText, setInputext, taskList, setTaskList}) => {
  const handleSubmit = (e) => {
    const taskId = uuid()

    e.preventDefault();
    
    if(inputText === '') {
      return
    }

    setTaskList([
      ...taskList,
      {
        text: inputText,
        id: `task-${taskId}`,
        draggableId: `task-${taskList.length}`
      },
    ]);
    setInputext('')
  };

  const handleChange = (e) => {
    setInputext(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}  onBlur={handleSubmit}>
        <input
          placeholder="add a task"
          type="text"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;
