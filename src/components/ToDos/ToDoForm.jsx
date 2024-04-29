import { useState, useEffect } from "react"
import { Formik, Field, Form } from "formik"
import { todoSchema } from "../../utilities/validationSchema"
import axios from "axios"
import './ToDos.css'

export default function ToDoForm({ todo = '', setShowCreate, getToDos, setShowEdit }) {
    const { name, categoryId, toDoId } = todo || ''
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7229/api/Categories`).then(response => {
            console.log(response)
            setCategories(response.data)
        })
    }, []);

    const handleSubmit = (values) => {
        console.log(values)
        if(!todo){
            const todoToCreate = values

            axios.post(`https://localhost:7229/api/ToDos`, todoToCreate).then(() => {
                setShowCreate(false)
                getToDos()
            })
        } else {
            const todoToEdit = {
                todoId: toDoId,
                name: values.name,
                categoryId: values.categoryId
            }

            axios.put(`https://localhost:7229/api/ToDos/${toDoId}`, todoToEdit).then(() => {
                setShowEdit(false)
                getToDos()
            })
        }
    }

  return (
    <Formik initialValues={{
        name: todo ? name : '',
        categoryId: todo ? categoryId : ''
    }}
    validationSchema={todoSchema} 
    onSubmit={(values) => handleSubmit(values)}>
        {({errors, touched}) => (
            <Form id="todoForm">
                <div className="form-group m-3">
                    <Field name='name' className='input form-control' placeholder='Name' />
                    {errors.name && touched.name && <div className="text-danger">{errors.name}</div> }
                </div>
                <div className="form-group m-3">
                    <Field as='select' name='categoryId' className='input form-control' id='catInput'>
                        <option value='' disabled>
                            [--Please Choose--]
                        </option>
                        {categories.map(cat => 
                            <option key={cat.categoryId} value={cat.categoryId}>
                                {cat.categoryName}
                            </option>    
                        )}
                    </Field>
                </div>
                <div className="form-group m-3">
                    <button type="submit" className="submitButton m-3">
                        Submit ToDo to API
                    </button>
                </div>
            </Form>
        )}
    </Formik>
  )
}