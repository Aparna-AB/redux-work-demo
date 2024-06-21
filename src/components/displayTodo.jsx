import { useSelector, useDispatch } from "react-redux";
import { completedTodo, deleteTodo } from "../redux/reduxTodoReducer/reduxTodoReducer";

export const DisplayTodo = () => {
    const todos = useSelector((state) => state.todo.reduxTodos);
    const dispatch = useDispatch();

    function handleDeleteTodo(id) {
        dispatch(deleteTodo(id));
    }

    function handleCompleteTodo(todo) {
        dispatch(completedTodo(todo));
    }

    return (
        <>
            <div>
                {todos.map((todo) => (
                    <div style={{ display: "flex", alignItems: "center"}} key={todo.id}>
                        <h5 style={{ marginRight: "20px" }}>({todo.id})</h5>
                        <h5 style={{ marginRight: "20px" }}>{todo.item}</h5>
                        <button style={{ marginRight: "10px" }} onClick={() => handleDeleteTodo(todo.id)}>
                            Delete
                        </button>
                        <button onClick={() => handleCompleteTodo(todo)}>
                            Completed
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};
