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
    let [modal, setModal] = useState(false)
    let [filter, setFilter] = useState(false)
    

    useEffect(() => {
        fetch('https://bossinfo-f45f.restdb.io/rest/categories', {
        headers: {
            'x-api-key': '627a9d53e8128861fcf3d1d7',
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
        setFilter(filter = true)
        } else{
            setFilter(filter = false)
        }
      }
    
    if (categories) {
        return (
            <>
            <Popup modal={modal} setModal={setModal}/>
            <div className='forum_container'>
            <div id='forum-content'>
                <div id='top-section'>
                    <SortSlider/>
                    <img onClick={toggleFilter} id="filter_icon" src='/filter_icon-25.svg'></img>
                    <button onClick={toggleModal} className='primaryButton'>Nyt spørgsmål</button>
                </div>
            
                <div className={filter == true ? 'side-menu active' : 'side-menu unactive'}>
                    <button onClick={toggleFilter} className='secondaryButton'>Tilbage</button>
                    <div id='categories'>
                        <h3>Filtrer</h3>
                        {categories.map((cat) => {
                            return (
                                <div className="category_wrapper">
                                    <input type="checkbox" id={cat._id} className="category_checkbox" value={cat.category}/>
                                    <label className="category_label" for={cat._id}>{cat.category}</label>
                                </div>
                            )
                        })}
                    </div>
                </div>
    
                <Question></Question>
                
            </div>
            </div>
            </>
        )
    } else {
        return <span>Loading</span>
    }
      
    
}

export default Forum