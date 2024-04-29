import ToDoForm from "./ToDoForm"

export default function ToDoCreate({setShowCreate, getTodos}) {
  return (
    <article className="createToDo m-2 text-white justify-content-center">
        <ToDoForm setShowCreate={setShowCreate} getToDos={getTodos} />
    </article>
  )
}