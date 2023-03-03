import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Task({ task, setTaskList, taskList,index }) {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  
  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          className="taskBox"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskText">{task.text}</p>
          <button
            className="taskDeleteButton"
            onClick={() => handleDelete(task.id)}
          >
            削除
          </button>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
