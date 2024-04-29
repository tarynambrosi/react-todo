import { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { FaEdit, FaTrashAlt } from "react-icons/fa"
import CatEdit from "./CatEdit"
import axios from "axios"

export default function SingleCategory({ category, getCategories }) {

    const {categoryName, categoryDescription, categoryId } = category
    const { currentUser } = useAuth()
    const [showEdit, setShowEdit] = useState(false)
    const [todos, setTodos] = useState([])

    const deleteCat = (id) => {
      if(window.confirm(`Are you sure you want to delete ${categoryName}?`)){
        axios.get(`https://localhost:7229/api/Categories`).then(t => {
          setTodos(t.data)
        })
        const filteredToDos = todos.filter(t => t.categoryId === id)

        if(filteredToDos.length > 0){
          window.alert(`Error! Cannot delete the category ${categoryName} because it contains the following tasks:
          ${filteredToDos.map(t => `\n${t.name}`)}
          \nPlease delete these tasks or reassign them to a different category before deleting ${categoryName}`)
        } else {
          axios.delete(`https://localhost:7229/api/Categories/${id}`).then(getCategories)
        }
      }
    }

  return (
    <tr>
        <td>{categoryName}</td>
        <td>{categoryDescription}</td>
        {/* BEGIN EDIT/DELETE UI */}
        {currentUser.email === import.meta.env.VITE_ADMIN_EMAIL &&
          <td>
            <button onClick={() => setShowEdit(true)} id="editLink" className="m-1 rounded">
              <FaEdit />
            </button>
            <button onClick={() => deleteCat(categoryId)} id="deleteLink" className="m-1 rounded">
              <FaTrashAlt />
            </button>
            {showEdit &&
              <CatEdit
              setShowEdit={setShowEdit}
              showEdit={showEdit}
              getCategories={getCategories}
              category={category} />
            }
          </td>
        }
        {/* END EDIT/DELETE UI */}
    </tr>
  )
}