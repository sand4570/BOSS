import React from 'react'

import './style.scss'

const Category = ({name}) => {

    return (
        <div className="category-wrapper">
            <input type="checkbox" id={name} className="category-checkbox" value={name}/>
            <label className="category-label" for={name}>{name}</label>
        </div>
    )
}

export default Category