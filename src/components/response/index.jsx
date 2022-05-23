import { useState, useEffect } from "react";

import './style.scss'
import ChangeTimestamp from "../Timestamp";
import Comment from "./comment";
import AddComment from "./AddComment";

const Response = ({id}) => {
    console.log('response id', id)

    const [answer, setAnswer] = useState(null)
    const [commentInput, setCommentInput] = useState("null")
    const [comment, setComment] = useState("")

    

    useEffect(() => {
        fetch(`https://bossinfo-f45f.restdb.io/rest/response?q={"_id": "${id}"}`, {
        headers: {
            'x-api-key': '627a9d53e8128861fcf3d1d7',
        }})
        .then((response) => response.json() )
        .then((data) => setAnswer(data))
    },[])

    console.log('response comp', answer)

    const handleAnswerClick = (accountnName, id) => {

        setCommentInput([id])
        
        const input = document.querySelector(`#${id}`)

        input.value = (`@${accountnName}`)
        input.focus({preventScroll: true})
        input.scrollTo({ behavior: 'smooth' })

    }

      if (answer) {
        if (answer[0].comments.length > 0) {
            return (
                <>
                <div className={answer[0].verified === true ? "response-container verified padding" : "response-container padding"}>
                    <div id="profile-wrapper">
                        <img className="" src={answer[0].user[0].picture ? `/profiles/${answer[0].user[0].picture}.jpg` : '/profiles/profile-placeholder.png'}></img>
                        <div>
                            <span className="profile-name">{answer[0].user[0].username}</span>
                            <span className="time-stamp">{<ChangeTimestamp timestamp={answer[0].created}></ChangeTimestamp>}</span>
                        </div>
                    </div>
                    <p className="response-content">{answer[0].content}</p>
                    <button className="answer-button" onClick={() => {handleAnswerClick(answer[0].user[0].username, `A${answer[0]._id}`)}}>Skriv en kommentar</button>
                </div>

                {answer[0].comments.map((comment) => {
                    return (
                        <Comment id={comment._id} answerId={answer[0]._id} handleAnswerClick={handleAnswerClick}></Comment>
                    )
                })}

                <AddComment id={`A${answer[0]._id}`} setComment={setComment} commentInput={commentInput}></AddComment>
                </>
              )

        } else {
            
            return (
                <>
                <div className={answer[0].verified === true ? "response-container verified" : "response-container"}>
                    <div id="profile-wrapper">
                        <img className="" src={answer[0].user[0].picture ? `/profiles/${answer[0].user[0].picture}.jpg` : '/profiles/profile-placeholder.png'}></img>
                        <div>
                            <span className="profile-name">{answer[0].user[0].username}</span>
                            <span className="time-stamp">{<ChangeTimestamp timestamp={answer[0].created}></ChangeTimestamp>}</span>
                        </div>
                    </div>
                    <p className="response-content">{answer[0].content}</p>
                    <button className="answer-button" onClick={() => {handleAnswerClick(answer[0].user[0].username, `A${answer[0]._id}`)}}>Skriv en kommentar</button>
                </div>
                
                <AddComment id={`A${answer[0]._id}`} setComment={setComment} commentInput={commentInput}></AddComment>
                </>
              )

        }

          
      } else {
          return <p>Loading</p>
      }
}

export default Response