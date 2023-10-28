import { useState } from "react";
import { addNewActiveTodo } from "../reducers/actions";

const AddTodo = ({ dispatch }) => {
  const [todo, setTodo] = useState({ title: "" });
  const handleChange = ({ target: { value } }) => {
    setTodo({ title: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addNewActiveTodo(dispatch, todo);
    setTodo({ title: "" });
  };
  const { title } = todo;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Enter TODO title"
        value={title}
        onChange={handleChange}
      />
      <button className="bg-red" type="submit">
        Add TODO
      </button>
    </form>
  );
};

export default AddTodo;
