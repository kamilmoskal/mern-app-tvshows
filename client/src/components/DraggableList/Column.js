import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 100%;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: all 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: 100px;
`;

const InnerList = React.memo(
  ({ tasks }) => {
    return tasks.map((task, index) => (
      <Task key={task.id} task={task} index={index} />
    ));
  },
  (prevProps, newProps) => newProps.tasks === prevProps.tasks
);

const Column = ({ column, tasks }) => {
  console.log("column");
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable
        droppableId={column.id}
        // Not allowed to drop item to column-3
        // type={column.id === "column-3" ? "done" : "active"}
      >
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {/* {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))} */}
            <InnerList tasks={tasks} />
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
