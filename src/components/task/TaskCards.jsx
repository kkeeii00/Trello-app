import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import AddTaskCardButton from "./button/AddTaskCardButton";
import TaskCard from "./TaskCard";

const TaskCards = () => {
  const [TaskCardsList, setTaskCardsList] = useState([
    {
      id: "0",
      draggableId: "item0",
    },
  ]);

  const handleDragEnd = (result) => {
    const remove = TaskCardsList.splice(result.source.index, 1);
    // remove();
    TaskCardsList.splice(result.destination.index, 0, remove[0]);

    setTaskCardsList(TaskCardsList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className="TaskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {TaskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                index={index}
                TaskCardsList={TaskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              TaskCardsList={TaskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskCards;
