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
    const [sort, setSort] = useState(null)

    const updateSort = (sorting) => {
        setSort(sorting)
    } 

    
    

    useEffect(() => {
        fetch('https://bossinfo-f45f.restdb.io/rest/categories', {
        headers: {
            'x-api-key': '627a9d53e8128861fcf3d1d7',
        }})
        .then((response) => response.json() )
        .then((data) => setCategories(data))
      },[])

      console.log('categories', categories)

      let [modal, setModal] = useState(false)
      
      const toggleModal = () => {
        setModal(modal = true)
        console.log("now im true", modal)
      }

    
    if (categories) {
        return (
            <>
            <Popup modal={modal} setModal={setModal}/>
            <div className='forum_container'>
            <div id='forum-content'>
                <div id='top-section'>
                    <SortSlider style={{display: 'none'}} updateSort={updateSort}/>
                    <button onClick={toggleModal} className='primaryButton'>Nyt spørgsmål</button>
                </div>
                
                <div id='side-menu'>
                    <div id='categories'>
                        {categories.map((cat) => {
                            return (
                                <Category cat={cat}></Category>
                            )
                        })}
                    </div>
                </div>
    
                <Question sort={sort}></Question>
            </div>
            </div>
            </>
        )
    } else {
        return <span>Loading</span>
    }
      
    
}

export default Forum