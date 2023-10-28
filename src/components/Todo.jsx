import { Draggable } from "react-beautiful-dnd";

const Todo = ({ todo: { id, title }, todoCardClass, index }) => {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          className={todoCardClass}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <h3>{title}</h3>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  );
};

export default Todo;
