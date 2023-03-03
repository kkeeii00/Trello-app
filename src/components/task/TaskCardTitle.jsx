import React from "react";
import { useState } from "react";

const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("today");

  const handleClick = () => {
    setIsClick(true);
    // console.log(isClick);
  };

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
    // console.log(inputCardTitle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  // const handleBlur = () => {
  //   setIsClick(false)
  // }

  return (
    <div onClick={handleClick} className='taskCardTitleArea'>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className="taskCardTitleInput"
            autoFocus
            type="text"
            onChange={handleChange}
            onBlur={() => setIsClick(false)}
            value={inputCardTitle}
            maxLength='10'
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};

export default TaskCardTitle;
