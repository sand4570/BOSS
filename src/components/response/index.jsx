import { useState, useEffect } from "react";

import './style.scss'
import ChangeTimestamp from "../Timestamp";
import Comment from "./comment";
import AddComment from "./AddComment";

const Response = ({answer}) => {
    console.log('response id', answer)

    const [commentInput, setCommentInput] = useState("null")
    const [comment, setComment] = useState("")


    const handleAnswerClick = (accountnName, id) => {

        setCommentInput([id])
        
        const input = document.querySelector(`#${id}`)

        input.value = (`@${accountnName}`)
        input.focus({preventScroll: true})
        input.scrollTo({ behavior: 'smooth' })

    }

      if (answer) {
        if (answer.comments.length > 0) {
            return (
                <>
                <div className={answer.verified === 1 ? "response-container verified padding" : "response-container padding"}>
                    <div id="profile-wrapper">
                        {/* <img className="" src={answer.account.picture ? `/profiles/${answer[0].user[0].picture}.jpg` : '/profiles/profile-placeholder.png'}></img> */}
                        <div>
                            <span className="profile-name">{`${answer.account.firstname} ${answer.account.lastname}`}</span>
                            <span className="time-stamp">{<ChangeTimestamp timestamp={answer.createdAt}></ChangeTimestamp>}</span>
                        </div>
                    </div>
                    <p className="response-content">{answer.content}</p>
                    <button className="answer-button" onClick={() => {handleAnswerClick(answer.account.firstname, `A${answer.id}`)}}>Skriv en kommentar</button>
                </div>

                {answer.comments.map((comment) => {
                    return (
                        <Comment comment={comment} answerId={answer.id} handleAnswerClick={handleAnswerClick}></Comment>
                    )
                })}

                <AddComment id={`A${answer.id}`} setComment={setComment} commentInput={commentInput}></AddComment>
                </>
              )

        } else {
            
            return (
                <>
                <div className={answer.verified === 1 ? "response-container verified padding" : "response-container padding"}>
                    <div id="profile-wrapper">
                        {/* <img className="" src={answer.account.picture ? `/profiles/${answer[0].user[0].picture}.jpg` : '/profiles/profile-placeholder.png'}></img> */}
                        <div>
                            <span className="profile-name">{`${answer.account.firstname} ${answer.account.lastname}`}</span>
                            <span className="time-stamp">{<ChangeTimestamp timestamp={answer.createdAt}></ChangeTimestamp>}</span>
                        </div>
                    </div>
                    <p className="response-content">{answer.content}</p>
                    <button className="answer-button" onClick={() => {handleAnswerClick(answer.account.firstname, `A${answer.id}`)}}>Skriv en kommentar</button>
                </div>
                
                <AddComment id={`A${answer.id}`} setComment={setComment} commentInput={commentInput}></AddComment>
                </>
              )

        }

          
      } else {
          return <p>Loading</p>
      }
}

export default Response