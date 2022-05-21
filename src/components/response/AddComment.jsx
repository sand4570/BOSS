import { useState, useEffect } from "react";

import './style.scss'

const AddComment = ({id, setComment, commentInput}) => {


    console.log('id', id, 'commentInput', commentInput)
    const isVisible = commentInput[0] == id.toString();

    return (
        <form className={isVisible ? "add-comment-wrapper" : "hide add-comment-wrapper"} >
        <input id={id} type="text" required onChange={event => setComment(event.target.value)}></input>
        <div id="input_border"></div>
        <button type="submit">➤</button>
    </form>
    )
}

export default AddComment