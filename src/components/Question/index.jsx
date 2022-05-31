import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import QuestionBox from './QuestionBox';


const Question = ({questions, sort, filterQuestions}) => {
    //console.log('question sort', sort)

    const { search } = useLocation()
    

    //const [sortedQuestions, setSortedQuestions] = useState(null)

    
  
    const changeTimeStamp = (timestamp) => {

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
          //console.log("questions", questions)

        let filtered_data = questions.questions.filter(question => {
            if (filterQuestions.length > 0) {
                //console.log("question filters: ", filterQuestions)
                //console.log("Question categories: ", question.categories)
                return question.categories.some(r => filterQuestions.includes(r.category))
            } else {
                return true
            }
        })

        let sortedArray = [] 

        if (sort == 'newest') {
        
            sortedArray = Array.from(filtered_data)
            //console.log('newest sort', sortedArray)
    
        } else if (sort == 'oldest') {
    
            sortedArray = Array.from(filtered_data).reverse()
            //console.log('oldest sort', sortedArray)

        } else if (sort == 'unanswered') {

            sortedArray = Array.from(filtered_data)
            sortedArray = sortedArray.sort((a, b) => parseInt(a.answers) - parseInt(b.answers));

        }  else if (sort == 'answered') {

            sortedArray = Array.from(filtered_data)
            sortedArray = sortedArray.sort((a, b) => parseInt(b.answers) - parseInt(a.answers));
        }

            return (
                
                <div id='content'>

                    {sortedArray.map((question) => {
                        //console.log('one question', question)

                    //{filtered_data.map((question) => {
                        // console.log('one question', question)

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
                                    <p>{question.answers} kommentarer</p>
                                    <img src='./comment_icon.png'></img>
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