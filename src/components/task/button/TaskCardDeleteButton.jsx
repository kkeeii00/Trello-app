import React from "react";

const TaskCardDeleteButton = ({
  TaskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const taskCardDeleteButton = (id) => {
    setTaskCardsList(TaskCardsList.filter((e) => e.id !== id))
  };
  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        ✕
      </button>
    </div>
  );
};

export default TaskCardDeleteButton;
