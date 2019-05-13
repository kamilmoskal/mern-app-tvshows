import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Column from "./Column/Column";
import { DragDropContext } from "react-beautiful-dnd";
import { Container } from "./styled";
import { AnimatedButton } from "../UI/Button";
import { Message } from "../UI/Message";

const DraggableList = ({ tvShowList, saveListToDB }) => {
  const [tasks, setTasks] = useState(null);
  const [columns, setColumns] = useState(null);
  const [columnOrder, setColumnOrder] = useState(null);

  useEffect(() => {
    setTasks(tvShowList.tasks);
    setColumns(tvShowList.columns);
    setColumnOrder(tvShowList.columnOrder);
  }, [tvShowList]);

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

    const startColumnId = columns[source.droppableId].id;
    const finishColumnId = columns[destination.droppableId].id;
    const startItemIndex = source.index;
    const finishItemIndex = destination.index;
    const itemId = draggableId;

    // if droppable item column is same from is dragging
    if (startColumnId === finishColumnId) {
      const startArray = [...columns[startColumnId].taskIds];
      startArray.splice(startItemIndex, 1);
      startArray.splice(finishItemIndex, 0, itemId);

      const updatedColumn = {
        ...columns,
        [startColumnId]: {
          ...columns[startColumnId],
          taskIds: startArray
        }
      };
      setColumns(updatedColumn);
    } else {
      // Moving from one column to another
      const startArray = [...columns[startColumnId].taskIds];
      startArray.splice(startItemIndex, 1);

      const finishArray = [...columns[finishColumnId].taskIds];
      finishArray.splice(finishItemIndex, 0, itemId);

      const updatedColumn = {
        ...columns,
        [startColumnId]: {
          ...columns[startColumnId],
          taskIds: startArray
        },
        [finishColumnId]: {
          ...columns[finishColumnId],
          taskIds: finishArray
        }
      };
      setColumns(updatedColumn);
    }

    //document.body.style.color = "inherit";
    //document.body.style.backgroundColor = "inherit";
  };
  const onDragStart = start => {
    //document.body.style.color = "orange";
    //document.body.style.transition = "background-color 0.2s ease";
  };
  const onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(tasks).length
      : 0;
    // document.body.style.backgroundColor = `rgba(153,141,217, ${opacity})`;
  };
  console.log("draggablelist");
  return (
    <>
      <DragDropContext
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        <Container>
          {tasks
            ? columnOrder.map(columnId => {
                const column = columns[columnId];
                const taskss = column.taskIds.map(taskId => tasks[taskId]);

                return (
                  <Column key={column.id} column={column} tasks={taskss} />
                );
              })
            : null}
          <div>
            <Message small>
              *After each time you modified or added new items to list, you
              should save changes or you will lost them
            </Message>
            <AnimatedButton
              margin
              onClick={() => saveListToDB({ tasks, columns })}
            >
              Save changes
            </AnimatedButton>
          </div>
        </Container>
      </DragDropContext>
    </>
  );
};

DraggableList.propTypes = {
  tvShowList: PropTypes.object.isRequired,
  saveListToDB: PropTypes.func.isRequired
};

export default React.memo(
  DraggableList,
  (prevProps, newProps) => newProps.tvShowList === prevProps.tvShowList
);
