import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Todo from "./Todo";
import {
  moveTodoFromActiveToCompleted,
  moveTodoFromCompletedToActive,
} from "../reducers/actions";

const Dashboard = ({
  activeTodos,
  completedTodos,
  activeDispatch,
  completedDispatch,
}) => {
  const handleOnDragEnd = (result) => {
    const { draggableId, source, destination } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId) return;
    if (destination.droppableId === "completedCol") {
      const todo = activeTodos.filter((todo) => todo.id === draggableId)[0];
      moveTodoFromActiveToCompleted(activeDispatch, completedDispatch, todo);
      return;
    }
    if (destination.droppableId === "activeCol") {
      const todo = completedTodos.filter((todo) => todo.id === draggableId)[0];
      moveTodoFromCompletedToActive(activeDispatch, completedDispatch, todo);
      return;
    }
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div id="todos-container">
        <div id="active-todos">
          <h1>Active TODOs</h1>
          <Droppable droppableId="activeCol">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {activeTodos.map((todo, index) => (
                  <Todo
                    key={index}
                    todo={todo}
                    index={index}
                    todoCardClass="active-todo"
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div id="completed-todos">
          <h1>Completed TODOs</h1>
          <Droppable droppableId="completedCol">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {completedTodos.map((todo, index) => (
                  <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    todoCardClass="completed-todo"
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};

export default Dashboard;
