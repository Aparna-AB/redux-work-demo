import { useSelector } from "react-redux";
import { completedTodo } from "../redux/reduxTodoReducer/reduxTodoReducer";

export const CompletedTodo = () => {
    const completedTodoItem = useSelector((state) => state.todo.completedTodos);

    return (
        <>
            <div>

                {completedTodoItem.map((completeTodo) => {

                    return (
                        <div style={{ display: "flex" }} key={completeTodo.id}>

                            <h4>({completeTodo.id})</h4> &nbsp;&nbsp;&nbsp;&nbsp;
                            <h3>{completeTodo.item}</h3>

                        </div>
                    );
                })}
            </div>
        </>
    );
};
