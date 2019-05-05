import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  background-color: ${props =>
    props.isDragDisabled
      ? "lightgrey"
      : props.isDragging
      ? "lightgreen"
      : "white"};

  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;

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
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
