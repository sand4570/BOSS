import React from 'react';
import { useState, useEffect } from 'react';
import {useLocation, Link} from 'react-router-dom';

import Question from '../../components/Question'
import './style.scss'

const Forum = () => {

    const [categories, setCategories] = useState(null)

    useEffect(() => {
        fetch('https://bossinfo-f45f.restdb.io/rest/categories', {
        headers: {
            'x-api-key': '627a9d53e8128861fcf3d1d7',
        }})
        .then((response) => response.json() )
        .then((data) => setCategories(data))
      },[])

      console.log('categories', categories)

    
    if (categories) {
        return (
            <div id='forum-content'>
                <div id='top-section'>
                    <button className='primaryButton'>Nyt spørgsmål</button>
                </div>
                
                <div id='side-menu'>
                    <div id='categories'>
                        {categories.map((cat) => {
                            return (
                                <div className='category'>
                                    <span>{cat.category}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
    
                <Question></Question>
            </div>
            
        )
    } else {
        return <span>Loading</span>
    }
      
    
}

export default Forum