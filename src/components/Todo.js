import {useDispatch} from "react-redux";
import {deleteTodo, changeStatus, editTodo} from "../store/todoSlice";
import {Modal} from "./Modal";

export function Todo ({todoInfo}) {
    const dispatch = useDispatch()

    const deleteTodoFn = () => {
        dispatch(deleteTodo(todoInfo.id))
    }

    const changeCheckbox = (event) => {
        const todo = {
            status: event.target.checked,
            id: todoInfo.id
        }
        dispatch(changeStatus(todo))
    }

    const editTodoFn = () => {
        dispatch(editTodo(todoInfo.id))
    }

    return(
        <div>
            {
                todoInfo.show
                ?
                    <Modal todoInfo={todoInfo}/>
                    :
                    <div className="todo">
                        <input type="checkbox" onChange={changeCheckbox}/>
                        <p className={todoInfo.status && "active"}>{todoInfo.text}</p>
                        <button onClick={editTodoFn}>Edit</button>
                        <button onClick={deleteTodoFn}>Delete</button>
                    </div>
            }
        </div>
    )
}