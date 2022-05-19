import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import './single.scss'
import Response from "../../components/response";
import ChangeTimestamp from "../../components/Timestamp";


const Singleview = () => {

    const id = useParams().questionId

    const [question, setQuestion] = useState(null)

    useEffect(() => {
        fetch(`https://bossinfo-f45f.restdb.io/rest/question?q={"_id": "${id}"}`, {
        headers: {
            'x-api-key': '627a9d53e8128861fcf3d1d7',
        }})
        .then((response) => response.json() )
        .then((data) => setQuestion(data))
      },[])

      console.log('single view question', question)

    if(question) {
        return (
            <>
            <button className="secondaryButton" onClick={() => history.back()}>Tilbage</button>
            <div id="content">
                <h1>{question[0].Title}</h1>
                <div id="profile-wrapper">
                    <img className="" src={question[0].user[0].picture ? `/profiles/${question[0].user[0].picture}.jpg` : '/profiles/profile-placeholder.png'}></img>
                    <div>
                        <span className="profile-name">{question[0].user[0].username}</span>
                        <span className="time-stamp">{<ChangeTimestamp timestamp={question[0].created}></ChangeTimestamp>}</span>
                    </div>
                </div>
                <p id="question-content">{question[0].content}</p>
                <div id="category-wrapper">
                    {question[0].category.map((cat) => {
                        return (
                            <span className='cat'>{cat.category}</span>
                        )
                    })}
                </div>
                <div id="flex-wrapper">
                    <span id="comment-amount">{question[0].responses.length} svar</span>
                    <button className="secondaryButton">Besvar spørgsmål</button>
                </div>
                <hr className="devider"></hr>
                
                <div id="response-wrapper">
                    {question[0].responses.map((response) => {
                        return (
                            <Response id={response._id}></Response>
                        )
                    })}
                </div>
                <form id="respond-wrapper">
                    <input placeholder={`Skriv et svar til ${question[0].user[0].username}`} type="text" required></input>
                    <button type="submit">►</button>
                </form>
                

            </div>
            </>
        )
    } else {
        return <p>loading</p>
    }
    

}

export default Singleview