import React from "react";
import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import Task from "../Task/Task";
import { Container, Title, TaskList } from "./styled";

const InnerList = React.memo(
  ({ tasks, columnId }) => {
    return tasks.map((task, index) => (
      <Task key={task.id} task={task} index={index} columnId={columnId} />
    ));
  },
  (prevProps, newProps) => newProps.tasks === prevProps.tasks
);

const Column = ({ column, tasks }) => {
  console.log("column");
  return (
    <Container columnId={column.id === "inprogress"}>
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
            {tasks.length > 0 ? (
              <InnerList tasks={tasks} columnId={column.id} />
            ) : null}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

Column.propTypes = {
  column: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired
};

export default Column;
