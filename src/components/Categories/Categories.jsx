import { useState, useEffect } from "react"
import axios from "axios"
import SingleCategory from "./SingleCategory";
import { useAuth } from '../../contexts/AuthContext'
import CatCreate from "./CatCreate";
import { IoAddOutline } from "react-icons/io5";
import './Categories.css'

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [showCreate, setShowCreate] = useState(false)

  const { currentUser } = useAuth()

  const getCategories = () => {
    axios.get(`https://localhost:7229/api/Categories`).then(response =>{
      console.log(response)
      setCategories(response.data)
    })
  }

  useEffect(() => {
    getCategories()
  }, []);

  return (
    <section className="categories">
      <article className="title p-5">
        <h1 className="text-center">Categories Dashboard</h1>
      </article>
      <div className="container p-2">
        <table className="table table-dark table-hover table-bordered table-striped my-3">
          <thead className="table-dark text-uppercase">
            <tr>
              <th>Name</th>
              <th>Description</th>
              {currentUser.email === import.meta.env.VITE_ADMIN_EMAIL &&
              <th></th>
              }
            </tr>
          </thead>
          <tbody>
            {categories.map(c =>
              <SingleCategory key={c.categoryId} category={c} getCategories={getCategories} />
            )}
          </tbody>
        </table>
         {/* BEGIN CREATE UI */}
       {currentUser.email === import.meta.env.VITE_ADMIN_EMAIL &&
            <div className="p-2 mb-3 text-center">
              <button onClick={() => setShowCreate(!showCreate)} className="createButton">
                {!showCreate ? <IoAddOutline /> : 'x'}
              </button>
              <div className="createContainer">
                {showCreate &&
                  <CatCreate getCategories={getCategories} setShowCreate={setShowCreate} />
                }
              </div>
            </div>
        }
        {/* END CREATE UI */}
      </div>
    </section>
  )
}