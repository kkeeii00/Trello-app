import React from "react";
import { v4 as uuid } from "uuid";

const AddTaskCardButton = ({ TaskCardsList, setTaskCardsList }) => {
  const addTaskCard = () => {
    const taskCardId = uuid();

    setTaskCardsList([
      ...TaskCardsList,
      {
        id: taskCardId,
        draggableID: `task${taskCardId}`,
      },
    ]);
  };
  return (
    <div className="addtaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};

export default AddTaskCardButton;
