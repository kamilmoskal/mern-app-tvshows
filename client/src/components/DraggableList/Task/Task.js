import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import { Container, Image } from "./styled";

const Task = ({ task, index }) => {
  console.log("task");
  const isDragDisabled = task.id === "task-1";
  return (
    <Draggable
      draggableId={task.id}
      index={index}
      //isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          // isDragDisabled={isDragDisabled}
        >
          {/* <Handle {...provided.dragHandleProps} /> */}
          {task.name}
          <Image bg={task.poster} />
        </Container>
      )}
    </Draggable>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default Task;
