import React, {useState, useEffect} from 'react';
import './style.scss'

const SortSlider = () => {
    const [active, setActive] = useState('newest');

      const sortQuestions = (category) =>{
        setActive(category)
    }

    return(
        <div className='sort_container'>
            <div className='sort_wrapper'>
                <p onClick={() => sortQuestions('newest')} className={active == 'newest' ? 'newest active' : 'newest'}>Nyest</p>
                <p onClick={() => sortQuestions('oldest')} className={active == 'oldest' ? 'oldest active' : 'oldest'}>Ældst</p>
                <p onClick={() => sortQuestions('unanswered')} className={active == 'unanswered' ? 'unanswered active' : 'unanswered'}>ubesvaret</p>
                <p onClick={() => sortQuestions('answered')} className={active == 'answered' ? 'answered active' : 'answered'} >besvaret</p>
                <div className='active_sort'></div>
            </div>
        </div>
    )
}

export default SortSlider