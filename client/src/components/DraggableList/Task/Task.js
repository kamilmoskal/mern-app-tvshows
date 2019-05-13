import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import { Container, Image } from "./styled";

const Task = ({ task, index, columnId }) => {
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
          columnId={columnId === "inprogress"}
          // isDragDisabled={isDragDisabled}
        >
          {/* <Handle {...provided.dragHandleProps} /> */}
          {columnId !== "inprogress" ? (
            <>
              <p>
                <strong>{index + 1}.</strong>
              </p>
              <p>{task.vote}</p>
            </>
          ) : null}

          <p>{task.name}</p>
          <p>({task.date})</p>
          <Image bg={task.poster} columnId={columnId === "inprogress"} />
        </Container>
      )}
    </Draggable>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default React.memo(
  Task,
  (prevProps, newProps) => newProps.index === prevProps.index
);
