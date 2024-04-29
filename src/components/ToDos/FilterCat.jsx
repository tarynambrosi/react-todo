import { useState, useEffect } from "react"
import axios from "axios"
import './ToDos.css'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function FilterCat({setFilter, showDone, setShowDone}) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7229/api/Categories`).then(response =>{
            console.log(response)
            setCategories(response.data)
        })
    }, []);

  return (
    <div className="text-center m-2">
        <button onClick={() => setFilter(0)} className="filterButton m-3">
            All
        </button>

        {categories.map(c =>
            <button key={c.categoryId} onClick={() => setFilter(c.categoryId)} className="filterButton m-3">
                {c.categoryName}
            </button>    
        )}
        {!showDone ?
            <button className="filterButton" onClick={() => setShowDone(!showDone)}>
                Show Complete &ensp;<FaRegEye />
            </button> :
            <button className="filterButton" onClick={() => setShowDone(!showDone)}>
                Hide Complete &ensp;<FaRegEyeSlash />
            </button>
        }
    </div>
  )
}