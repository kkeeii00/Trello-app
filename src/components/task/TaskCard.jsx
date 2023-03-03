import React, { useState } from "react";
import TaskAddInput from "./TaskAddInput";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskCardTitle from "./TaskCardTitle";
import Tasks from "./Tasks";
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ TaskCardsList, setTaskCardsList, taskCard, index }) => {
  const [inputText, setInputext] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className="taskCard"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="TaskCardTitleAndDeleteArea"   {...provided.dragHandleProps}>
            <TaskCardTitle />
            <TaskCardDeleteButton
              TaskCardsList={TaskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputext={setInputext}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks taskList={taskList} setTaskList={setTaskList} />
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
