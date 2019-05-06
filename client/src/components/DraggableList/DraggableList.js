import React, { useState } from "react";
import Column from "./Column/Column";
import { DragDropContext } from "react-beautiful-dnd";
import { Container } from "./styled";

const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      name: "1Game of Thrones",
      img: "http://image.tmdb.org/t/p/w92/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
      overview:
        "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond."
    },
    "task-2": {
      id: "task-2",
      name: "2Game of Thrones",
      img: "http://image.tmdb.org/t/p/w92/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
      overview:
        "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond."
    }
    // "task-3": {
    //   id: "task-3",
    //   name: "3Game of Thrones",
    //   img: "http://image.tmdb.org/t/p/w92/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    //   overview:
    //     "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond."
    // },
    // "task-4": {
    //   id: "task-4",
    //   name: "4Game of Thrones",
    //   img: "http://image.tmdb.org/t/p/w92/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    //   overview:
    //     "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond."
    // }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To watch",
      taskIds: ["task-1", "task-2"]
      //taskIds: ["task-1", "task-2", "task-3", "task-4"]
    },
    "column-2": {
      id: "column-2",
      title: "Watched",
      taskIds: []
    },
    "column-3": {
      id: "column-3",
      title: "In progress",
      taskIds: []
    }
  },
  columnOrder: ["column-1", "column-2", "column-3"]
};

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

    //document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";
  };
  const onDragStart = start => {
    //document.body.style.color = "orange";
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

export default React.memo(DraggableList);
