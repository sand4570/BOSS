import { useState, useEffect } from "react";

import ChangeTimestamp from "../Timestamp";

const Comment = ({id, answerId, handleAnswerClick}) => {
    console.log('comment id', id)

    const [comment, setComment] = useState(null)

    useEffect(() => {
        fetch(`https://bossinfo-f45f.restdb.io/rest/comment?q={"_id": "${id}"}`, {
        headers: {
            'x-api-key': '627a9d53e8128861fcf3d1d7',
        }})
        .then((response) => response.json() )
        .then((data) => setComment(data))
    },[])

    console.log('comment comp', comment)

    if (comment) {
        return (
            <>
                <div className="line"></div>
                <div className="comment-wrapper">
                    <div id="profile-wrapper">
                        <img className="" src={comment[0].user[0].picture ? `/profiles/${comment[0].user[0].picture}.jpg` : '/profiles/profile-placeholder.png'}></img>
                        <div>
                            <span className="profile-name">{comment[0].user[0].username}</span>
                            <span className="time-stamp">{<ChangeTimestamp timestamp={comment[0].created}></ChangeTimestamp>}</span>
                        </div>
                    </div>
                    <p>{comment[0].content}</p>
                    <button className="answer-button" onClick={() => {handleAnswerClick(comment[0].user[0].username, `A${answerId}`)}}>Svar</button>
                </div>
            </>
        )
    } else {
        return <></>
    }


   
}

export default Comment