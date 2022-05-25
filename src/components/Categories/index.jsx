import React from 'react'

import './style.scss'

const Category = ({cat, setClickedCategoies, clickedCategoies}) => {
    console.log("the clicked", clickedCategoies)

    const handleChange = (event) => {
        if (event.target.checked) {
            setClickedCategoies([...clickedCategoies, event.target.value])
        } else {
            setClickedCategoies(
                clickedCategoies.filter((category) => category !== event.target.value),
              );
        }
    }

    return (
        <div className="category-wrapper">
            <input type="checkbox" id={cat.category} className="category-checkbox" name='category' value={cat.id} onChange={handleChange}/>
            <label className="category-label" for={cat.category}>{cat.category}</label>
        </div>
    )
}

export default Category