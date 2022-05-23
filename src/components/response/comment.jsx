import { useState, useEffect } from "react";

import ChangeTimestamp from "../Timestamp";

const Comment = ({comment, answerId, handleAnswerClick}) => {
    console.log('comment', comment)


    

    if (comment) {
        return (
            <>
                <div className="line"></div>
                <div className="comment-wrapper">
                    <div id="profile-wrapper">
                        {/* <img className="" src={comment.account[0].picture ? `/profiles/${comment[0].user[0].picture}.jpg` : '/profiles/profile-placeholder.png'}></img> */}
                        <div>
                            <span className="profile-name">{`${comment.account.firstname} ${comment.account.lastname}`}</span>
                            <span className="time-stamp">{<ChangeTimestamp timestamp={comment.createdAt}></ChangeTimestamp>}</span>
                        </div>
                    </div>
                    <p>{comment.content}</p>
                    <button className="answer-button" onClick={() => {handleAnswerClick(comment.account.firstname, `A${answerId}`)}}>Skriv en kommentar</button>
                </div>
            </>
        )
    } else {
        return <></>
    }


   
}

export default Comment