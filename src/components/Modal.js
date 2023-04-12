import {editInput, saveEdit, cancelEdit} from "../store/todoSlice";
import {useDispatch, useSelector} from "react-redux";


export function Modal ({todoInfo}) {
    const dispatch = useDispatch()
    const {editedValue} = useSelector(state => state.todoReducer)

    const editedInput = (event) => {
        dispatch(editInput(event.target.value))
        console.log(event.target.value)
    }

    const saveEditFn = () => {
        const editedTodo = {
            id: todoInfo.id,
            editedText: editedValue
        }
        dispatch(saveEdit(editedTodo))
    }

    const cancelEditFn = () => {
        dispatch(cancelEdit(todoInfo.id))
    }

    return(
        <div className="modal">
            <div>
                <input type="text" placeholder="Edit todo" onChange={editedInput}/>
                <button onClick={saveEditFn}>Save</button>
                <button onClick={cancelEditFn}>Cancel</button>
            </div>
        </div>
    )
}