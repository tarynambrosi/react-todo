import { useAuth } from "../../contexts/AuthContext"
import { useState } from "react"
import { FaTrashAlt } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'
import ToDoEdit from "./ToDoEdit"
import axios from "axios"
import './ToDos.css'


export default function SingleToDo({ todo, getToDos }) {

    const { name, done, category, toDoId, categoryId } = todo
    const { currentUser } = useAuth()

    const handleDone = () => {
      console.log(`done: ${done} !done: ${!done}`)
      let updatedTodo = {
        toDoId: toDoId,
        name: name,
        done: !done,
        categoryId: categoryId
      }
      axios.put(`https://localhost:7229/api/ToDos/${toDoId}`, updatedTodo).then(response => {
        console.log(response)
        getToDos()
      })
    }

    const [showEdit, setShowEdit] = useState(false)

    const deleteToDo = (id) => {
      if(window.confirm(`Are you sure you want to delete ${name}?`)){
        axios.delete(`https://localhost:7229/api/ToDos/${id}`).then(getToDos)
      }
    }

  return (
    <tr>
        <td><input className="checkbox" type="checkbox" checked={done} onChange={() => handleDone()} /></td>
        <td>{name}</td>
        <td>{category.categoryName}</td>
        {/* BEGIN EDIT/DELETE UI */}
        {currentUser.email === import.meta.env.VITE_ADMIN_EMAIL &&
        <td>
          <button onClick={() => setShowEdit(true)} id="editLink">
            <MdEdit />
          </button>
          <button onClick={() => deleteToDo(toDoId)} id="deleteLink">
            <FaTrashAlt />
          </button>
          {showEdit &&
            <ToDoEdit
            setShowEdit={setShowEdit}
            showEdit={showEdit}
            getToDos={getToDos} 
            todo={todo}/>
          }
        </td>
        }
        {/* END EDIT/DELETE UI */}
    </tr>
  )
}