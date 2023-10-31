import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './List';
import React from 'react';

const Lists = React.memo(({ todoData, setTodoData }) => {
  const handleEnd = ({ source, destination }) => {
    if (!destination) return;

    const newTodoData = [...todoData];

    const [reorderdItem] = newTodoData.splice(source.index, 1);

    newTodoData.splice(destination.index, 0, reorderdItem);
    setTodoData(newTodoData);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {todoData.map((data, index) => (
                <Draggable draggableId={data.id.toString()} index={index} key={data.id}>
                  {(provided, snapshot) => (
                    <List
                      key={data.id}
                      id={data.id}
                      title={data.title}
                      completed={data.completed}
                      todoData={todoData}
                      setTodoData={setTodoData}
                      provided={provided}
                      snapshot={snapshot}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
});

export default Lists;
