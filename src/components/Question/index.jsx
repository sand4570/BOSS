import { useState, useEffect } from 'react';


const Question = () => {

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

      if (questions) {

            questions.map((question) => {
                console.log('one question', question)
                return (
                    <div className='question-box'>
                        <div className='profile-box'>
        
                        </div>
                        <div className='content-box'>
                            <h3>{question.Title}</h3>
                            <p>{content}</p>
                        </div>
                        <div className='comment-box'></div>
                    </div>
                )
            })
          
      } else {
          return (
              <h1>Loading</h1>
          )
      }
}

export default Question