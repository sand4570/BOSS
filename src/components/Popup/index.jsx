import React, {useState, useEffect, useCallback} from 'react';
import './style.scss'
import Category from '../Categories'

const Popup = ({modal, setModal}) => {

    const [categories, setCategories] = useState(null)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    useEffect(() => {
        fetch('https://bossinfo-f45f.restdb.io/rest/categories', {
        headers: {
            'x-api-key': '627a9d53e8128861fcf3d1d7',
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

        const question = {
            Title: title,
            content: content,
            //created: new Date(),
        }

        console.log('my json', question)

        fetch("https://bossinfo-f45f.restdb.io/rest/question", {
            method: "post",
            mode: 'no-cors',
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "x-apikey": "627a9d53e8128861fcf3d1d7",
              "cache-control": "no-cache",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(question),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
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
                    <h3>Tilføj kategorier</h3>
                    <p className='info_txt'>Vælg en eller flere kategorier, som dit spørgsmål relaterer til.</p>
                    <div className='cat_wrapper'>
                    {categories.map((cat) => {
                            return (
                                <Category name={cat.category}></Category>
                            )
                        })}
                    </div>
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