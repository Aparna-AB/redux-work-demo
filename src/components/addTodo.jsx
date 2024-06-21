import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reduxTodoReducer/reduxTodoReducer";
import { useState } from "react";

export const AddTodo = () => {
    const [item, setItem] = useState("");
    const dispatch = useDispatch();

    const addItem = () => {
        dispatch(addTodo(item));
        setItem("");
    };

    return (
        <>
            <div>
                <input type="text"
                    placeholder="Enter the item"
                    value={item}
                    onChange={(e) => {
                        setItem(e.target.value);
                    }}
                />
                <button onClick={addItem}>Add Item</button>
            </div>
        </>
    );
};