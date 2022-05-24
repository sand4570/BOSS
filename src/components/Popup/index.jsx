import React, {useState, useEffect, useCallback} from 'react';
import './style.scss'
import Category from '../Categories'
import { useSearchParams } from 'react-router-dom';

const Popup = ({modal, setModal}) => {

    const [categories, setCategories] = useState(null)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const [searchParams, setSearchParams] = useSearchParams()
    const [clickedCategoies, setClickedCategoies] = useState([])

    console.log("What categories", clickedCategoies)

    useEffect(() => {
        fetch('https://boss-info.herokuapp.com/api/categories', {
        headers: {
            'api-key': 'nSY1oe7pw05ViSEapg09D4gHG87yJCTX67uDa1OO',
        }})
        .then((response) => response.json() )
        .then((data) => setCategories(data))
      },[])

      const toggleModal = useCallback(() => {
        setModal(modal = false)
      }, [setModal])


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('time to post')
        
        const user = searchParams.get("id")
        

        console.log('the user', user)

        const question = {
            title: title,
            content: content,
            account_id: user,
            categories: clickedCategoies
        }

        console.log('my json', question)

        fetch("https://boss-info.herokuapp.com/api/questions", {
            method: "post",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "api-key": "nSY1oe7pw05ViSEapg09D4gHG87yJCTX67uDa1OO",
              "cache-control": "no-cache"
            },
            body: JSON.stringify(question),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));

        toggleModal()
    }
    

    
    if(categories){
    return(
    <div className={modal ? 'modal_container showing' : 'modal_container hiding'}>
        <div className='modal_background'>
            <div className='modal'>
                <button onClick={toggleModal} className='secondaryButton'>Luk</button>
                <div className='form_wrapper'>
                <h2>Opret spørgsmål</h2>
                <form onSubmit={handleSubmit}>
                    <div className='input_wrapper'>
                        <label>Hvad omhandler dit spørgsmål?</label>
                        <input placeholder="F.eks. ønske til system, fejl ved oprettelse osv." type="text" required onChange={event => setTitle(event.target.value)}></input>
                    </div>
                    <div className='input_wrapper'>
                        <label>Hvad vil du gerne spørge om?</label>
                        <textarea placeholder="Uddyb gerne dit spørgsmål" required onChange={event => setContent(event.target.value)}></textarea>
                    </div>
                    <h3>Tilføj kategori *</h3>
                    <p className='info_txt'>Vælg en eller flere kategorier, som dit spørgsmål relaterer til.</p>
                    <legend className='cat_wrapper' >
                    {categories.categories.map((cat) => {
                            return (
                                <Category cat={cat} setClickedCategoies={setClickedCategoies} clickedCategoies={clickedCategoies} ></Category>
                            )
                        })}
                    </legend>
                    <button className='primaryButton opret_button'>Opret spørgsmål</button>
                </form>
                </div>
            </div>
        </div>
    </div>
    )
} else{
    return <p>loading..</p>
}
}

export default Popup