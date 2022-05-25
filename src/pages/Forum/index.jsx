import React from 'react';
import { useState, useEffect } from 'react';
import {useLocation, Link} from 'react-router-dom';

import SortSlider from '../../components/SortSlider';
import Popup from '../../components/Popup'
import Question from '../../components/Question'
import Category from '../../components/categories';
import './style.scss'

const Forum = () => {

    const [categories, setCategories] = useState(null)
    const [sort, setSort] = useState("newest")
    const [questions, setQuestions] = useState(null)

    async function getQuestionData(messege) {
        console.log(messege)
        fetch('https://boss-info.herokuapp.com/api/questions', {
        headers: {
            'api-key': 'nSY1oe7pw05ViSEapg09D4gHG87yJCTX67uDa1OO',
        }})
        .then((response) => response.json() )
        .then((data) => setQuestions(data))
    }

    useEffect(() => {
        getQuestionData('from Forum')
    },[])


    let [filterQuestions, setFilteredQuestions] = useState([])
    let [modal, setModal] = useState(false)
    let [filter, setFilter] = useState(false)

    
    const showFilter = (cat, fil_q) => {
        if(cat.category === "Technical") {
            showTechnical(fil_q, "Technical")
        } else if (cat.category == "Personal") {
            showTechnical(fil_q, "Personal")
        } else{
            showTechnical(fil_q, "Error")
        }
    }
    
    const showTechnical = (fil_q, filter) => {
        if (fil_q.includes(filter)) {
            setFilteredQuestions(fil_q.filter(item => item !== filter))
        } else {
            setFilteredQuestions([...fil_q, filter]);
        }
    }

    useEffect(() => {
        fetch('https://boss-info.herokuapp.com/api/categories', {
        headers: {
            'api-key': 'nSY1oe7pw05ViSEapg09D4gHG87yJCTX67uDa1OO',
        }})
        .then((response) => response.json() )
        .then((data) => setCategories(data))
    },[])

      
      
    //toggle the modal
    const toggleModal = () => {
        setModal(modal = true)
        
    }

    useEffect(() => {
        if(modal) {
            document.body.classList.add('no-scroll');
        } else{
            document.body.classList.remove('no-scroll');
        }
    }, [modal]);


    //toggle filter on mobile
    const toggleFilter = () => {
        if(filter == false) {
        setFilter(true)
        } else{
            setFilter(false)
        }
    }

    if (categories) {
        return (
            <>
            <Popup modal={modal} setModal={setModal} getQuestionData={getQuestionData}/>
            <div className='forum_container'>
            <div id='forum-content'>
                <div id='top-section'>
                    <SortSlider setSort={setSort}/>
                    <img onClick={toggleFilter} id="filter_icon" src='/filter_icon-25.svg'></img>

                    <button onClick={toggleModal} className='primaryButton'>Nyt spørgsmål</button>
                </div>
            
                <div className={filter == true ? 'side-menu active' : 'side-menu unactive'}>
                    <button onClick={toggleFilter}></button>
                    <div id='categories'>
                        <h3>Filtrer</h3>
                        {categories.categories.map((cat) => {
                            // console.log("categories here", categories)
                            return (
                                <div className="category_wrapper">
                                    <input type="checkbox"  onClick={() => showFilter(cat, filterQuestions)} id={cat.id} className="category_checkbox" value={cat.category}/>
                                    <label className="category_label" for={cat.id}>{cat.category}</label>
                                </div>

                            )
                        })}
                    </div>
                </div>
                <Question questions={questions} sort={sort} filterQuestions={filterQuestions}></Question>

            </div>
            </div>
            </>
        )
    } else {
        return <span>Loading</span>
    }
      
    
}

export default Forum