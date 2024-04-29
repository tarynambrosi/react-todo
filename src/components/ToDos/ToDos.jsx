import { useState, useEffect } from "react";
import axios from "axios";
import SingleToDo from "./SingleToDo";
import FilterCat from "./FilterCat";
import { useAuth } from '../../contexts/AuthContext'
import ToDoCreate from "./ToDoCreate"
import './ToDos.css'
import { IoAddOutline } from "react-icons/io5";

export default function ToDos() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(0);
  const [showCreate, setShowCreate] = useState(false);
  const [showDone, setShowDone] = useState(false);
  const { currentUser } = useAuth()

  const getToDos = () => {
    axios.get(`https://localhost:7229/api/ToDos`).then((response) => {
      console.log(response);
      setTodos(response.data);
    });
  };

  useEffect(() => {
    getToDos();
  }, []);

  return (
    <section className="todos">
      <article className="title p-5">
        <h1 className="text-center">ToDo Dashboard</h1>
      </article>
      
        <FilterCat setFilter={setFilter} />
      <div className="container p-2">
        <table className="table table-dark table-hover table-bordered table-striped my-3">
          <thead className="thead-light text-uppercase">
            <tr>
              <th>Done?</th>
              <th>To Do</th>
              <th>Category</th>
              {currentUser.email === import.meta.env.VITE_ADMIN_EMAIL &&
              <td></td>
              }
            </tr>
          </thead>
          <tbody>
            {!showDone ?
              <>
              {filter === 0 ? todos.filter(x => x.done === false).map(x => 
                <SingleToDo key={x.toDoId} todo={x} getToDos={getToDos} />
              ) : 
              todos.filter(x => x.done === false && x.categoryId === filter).map(x =>
                <SingleToDo key={x.toDoId} todo={x} getToDos={getToDos} />
              )}
              </> :

            <>
            {filter === 0
              ? todos.map((t) => <SingleToDo key={t.toDoId} getToDos={getToDos} todo={t}/>)
              : todos
                  .filter((t) => t.categoryId === filter)
                  .map((t) => <SingleToDo key={t.toDoId} getToDos={getToDos} todo={t} />)}
            {filter !== 0 &&
              todos.filter((c) => c.categoryId === filter).length === 0 && (
                <h2 className="alert alert-warning text-dark">
                  There are no results for this category.
                </h2>
              )}</>
            }
          </tbody>
        </table>
        {/* Create UI start */}
      {currentUser.email === import.meta.env.VITE_ADMIN_EMAIL &&
        <div className="p-2 mb-3 text-center">
          <button onClick={() => setShowCreate(!showCreate)} className="createButton">
            {!showCreate ? <IoAddOutline /> : 'x'}
          </button>
          <div className="createContainer">
            {showCreate &&
              <ToDoCreate getTodos={getToDos} setShowCreate={setShowCreate} />
            }
          </div>
        </div>
      }
      {/* Create UI end */}
      </div>
    </section>
  );
}
