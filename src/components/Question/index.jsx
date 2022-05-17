import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import QuestionBox from './QuestionBox';


const Question = () => {

    const { search } = useLocation()

    const [questions, setQuestions] = useState(null)

    useEffect(() => {
        fetch('https://bossinfo-f45f.restdb.io/rest/question', {
        headers: {
            'x-api-key': '627a9d53e8128861fcf3d1d7',
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
                    string.substring(0,100)
                )
            }
      }

      if (questions) {

            return (
                
                <div id='content'>
                    {questions.map((question) => {
                        console.log('one question', question)
                        return (
                            <Link to={`/forum/${question._id + search}`}>
                            <div className='question-box'>
                                <div className='profile-box'>
                                    <img src={question.user[0].picture ? `/profiles/${question.user[0].picture}.jpg` : '/profiles/profile-placeholder.png'}></img>
                                    <div className='text-box'>
                                        <span className='profile-name'>{question.user[0].username}</span>
                                        <span className='time-stamp'>{changeTimeStamp(question.created)}</span>
                                    </div>
                                </div>
                                <div className='content-box'>
                                    <h3>{question.Title}</h3>
                                    <div className='text-content'>
                                        <span>{`${cutString(question.content)}... `}</span>
                                        <span className='read-more'>Læs mere</span>
                                    </div>
                                    <div className='cats'>
                                        {question.category.map((cat) => {
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