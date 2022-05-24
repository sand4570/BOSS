import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import './style.scss'

const AddComment = ({id, setComment, commentInput, getData}) => {

    

    const [searchParams, setSearchParams] = useSearchParams()
    const [commentContent, setCommentContent] = useState("")

    //console.log('id', id, 'commentInput', commentInput)
    const isVisible = commentInput[0] == 'A' + id.toString();

    const handleSubmit = (event) => {
        event.preventDefault()
        //console.log('time to post')
        
        const user = searchParams.get("id")

        const theValue = document.querySelector('#' + commentInput[0]).value


        const comment = {
            content: theValue,
            answer_id: id,
            account_id: user
        }

        fetch("https://boss-info.herokuapp.com/api/comments", {
            method: "post",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "api-key": "nSY1oe7pw05ViSEapg09D4gHG87yJCTX67uDa1OO",
              "cache-control": "no-cache"
            },
            body: JSON.stringify(comment),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));

        getData()
    }

    return (
        <form className={isVisible ? "add-comment-wrapper" : "hide add-comment-wrapper"} onSubmit={handleSubmit} >
        <input id={`A${id}`} type="text" required onChange={event => setComment(event.target.value)}></input>
        <div id="input_border"></div>
        <button type="submit">➤</button>
    </form>
    )
}

export default AddComment