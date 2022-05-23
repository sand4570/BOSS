import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import './single.scss'
import Response from "../../components/response";
import ChangeTimestamp from "../../components/Timestamp";


const Singleview = () => {

    const id = useParams().questionId
    

    const [question, setQuestion] = useState(null)

    useEffect(() => {
        fetch(`https://boss-info.herokuapp.com/api/questions/${id}`, {
        headers: {
            'api-key': 'nSY1oe7pw05ViSEapg09D4gHG87yJCTX67uDa1OO',
        }})
        .then((response) => response.json() )
        .then((data) => setQuestion(data))
      },[])

      console.log('single view question', question)

      const scrollToInput = () => {
          document.querySelector("#respond-wrapper").scrollIntoView({ behavior: 'smooth' })
          document.querySelector("#respond-wrapper input").focus({preventScroll: true})
      }

    if(question) {
        return (
            <div id="single-view-container">
            <button className="secondaryButton single" onClick={() => history.back()}>Tilbage</button>
            <div id="content">
                <h1>{question.questions[0].title}</h1>
                <div id="profile-wrapper">
                    {/* <img className="" src={question[0].user[0].picture ? `/profiles/${question[0].user[0].picture}.jpg` : '/profiles/profile-placeholder.png'}></img> */}
                    <div>
                        <span className="profile-name">{`${question.questions[0].account.firstname} ${question.questions[0].account.lastname}`}</span>
                        <span className="time-stamp">{<ChangeTimestamp timestamp={question.questions[0].createdAt}></ChangeTimestamp>}</span>
                    </div>
                </div>
                <p id="question-content">{question.questions[0].content}</p>
                <div id="category-wrapper">
                    {question.questions[0].categories.map((cat) => {
                        return (
                            <span className='cat'>{cat.category}</span>
                        )
                    })}
                </div>
                <div id="flex-wrapper">
                    <span id="comment-amount">{question.questions[0].answers.length} svar</span>
                    <button className="secondaryButton" onClick={scrollToInput}>Besvar spørgsmål</button>
                </div>
                <hr className="devider"></hr>
                
                <div id="response-wrapper">
                    {question.questions[0].answers.map((answer) => {
                        console.log('what is answer', answer)
                        return (
                            <Response answer={answer}></Response>
                        )
                    })}
                </div>
                <form id="respond-wrapper">
                    <input placeholder={`Skriv et svar til ${question.questions[0].account.firstname} ${question.questions[0].account.lastname}`} type="text" required></input>
                    <div id="input_border"></div>
                    <button type="submit">➤</button>
                </form>
                

            </div>
            </div>
        )
    } else {
        return <p>loading</p>
    }
    

}

export default Singleview