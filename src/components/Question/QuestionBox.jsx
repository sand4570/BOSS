const QuestionBox = ({question}) => {
    console.log('in box', question)

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


}

export default QuestionBox