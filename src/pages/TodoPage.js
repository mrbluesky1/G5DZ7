import {changeTodoValue, addTodo, deleteAll} from "../store/todoSlice";
import {useDispatch, useSelector} from "react-redux";
import {Todo} from "../components/Todo";

export default function TodoPage() {
    const dispatch = useDispatch()
    const {value, todos} = useSelector(state => state.todoReducer)

    const changeValueFn = (event) => {
        dispatch(changeTodoValue(event.target.value))

    }

    const addTodoFn = () => {
        if(value.trim() === "") {
            alert('заполните поля')
            return
        }

        dispatch(addTodo(value))
    }

    const deleteAllFn = () => {
        dispatch(deleteAll())
    }

    return(
        <>
            <input type="text" onChange={changeValueFn} placeholder="todo" value={value}/>
            <button onClick={addTodoFn}>add todo</button>
            <button onClick={deleteAllFn}>Delete all</button>
            {
                todos.length > 0
                ?
                    todos.map(todo => <Todo todoInfo={todo} key={todo.id}/>)
                    :
                    <p>Задaч нет</p>
            }
        </>
    )
}