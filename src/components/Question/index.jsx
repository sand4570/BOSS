import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import QuestionBox from './QuestionBox';


const Question = ({sort}) => {
    console.log('question sort', sort)

    const { search } = useLocation()
    const [questions, setQuestions] = useState(null)

    

    

    useEffect(() => {
        fetch('https://boss-info.herokuapp.com/api/questions', {
        headers: {
            'api-key': 'nSY1oe7pw05ViSEapg09D4gHG87yJCTX67uDa1OO',
        }})
        .then((response) => response.json() )
        .then((data) => setQuestions(data))
      },[])

      console.log('Questions', questions)

      const changeTimeStamp = (timestamp) => {
        console.log(timestamp)

        const date = new Date(timestamp);
        return ('date',date.toLocaleDateString('da-DK', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        }))
      }

      const cutString = (string) => {
            if(string.length > 100) {

                return (
                    string.substring(0,100) + "..."
                )
            } else {
                return (
                    string
                )
            }
      }

      if (questions) {

            return (
                
                <div id='content'>
                    {questions.questions.map((question) => {
                        console.log('one question', question)
                        return (
                            <Link to={`/forum/${question.id + search}`}>
                            <div className='question-box'>
                                <div className='profile-box'>
                                    <div className='circle-name'> <span>{question.account.firstname.substring(0,1) + question.account.lastname.substring(0,1)}</span></div>
                                    <div className='text-box'>
                                        <span className='profile-name'>{`${question.account.firstname} ${question.account.lastname}`}</span>
                                        <span className='time-stamp'>{changeTimeStamp(question.createdAt)}</span>
                                    </div>
                                </div>
                                <div className='comment-container'>
                                    <p>2 kommentarer</p>
                                    <img src='/comment_icon.png'></img>
                                </div>
                                <div className='content-box'>
                                    <h3>{question.title}</h3>
                                    <div className='text-content'>
                                        <span>{`${cutString(question.content)} `}</span>
                                        <span className='read-more'>Læs mere</span>
                                    </div>
                                    <div className='cats'>
                                        {question.categories.map((cat) => {
                                            return (
                                                <span className='cat'>{cat.category}</span>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            </Link>
                        )
                    })}
                </div>
            )
          
      } else {
          return (
              <h1>Loading</h1>
          )
      }
}

export default Question