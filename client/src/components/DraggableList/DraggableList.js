import React, { useState } from "react";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "1Take out the garbage" },
    "task-2": { id: "task-2", content: "2Take out the garbage" },
    "task-3": { id: "task-3", content: "3Take out the garbage" },
    "task-4": { id: "task-4", content: "4Take out the garbage" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskIds: []
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: []
    }
  },
  columnOrder: ["column-1", "column-2", "column-3"]
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const DraggableList = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    // if droppable item column is same from is dragging
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };
      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn
        }
      };
      setData(newState);
    } else {
      // Moving from one list to another
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds
      };

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds
      };

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish
        }
      };
      setData(newState);
    }

    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";
  };
  const onDragStart = start => {
    document.body.style.color = "orange";
    document.body.style.transition = "background-color 0.2s ease";
  };
  const onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(data.tasks).length
      : 0;
    document.body.style.backgroundColor = `rgba(153,141,217, ${opacity})`;
  };
  console.log("draggablelist");
  console.log(data);
  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <Container>
        {data.columnOrder.map(columnId => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Container>
    </DragDropContext>
  );
};

export default DraggableList;
