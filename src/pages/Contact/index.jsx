import React from 'react'
import PrimaryButton from '../../components/PrimaryButton'
import './style.scss'

const Contact = () => {
    return(
    <>
    <img id='form' src='/form6.svg'></img>
    <>
        <h2>Lad os snakke sammen</h2>
        <section id='form_section'>
            <div>
                <h3>Kontakt os</h3>
                <p>Kontakt BOSS via formularen eller ring til os. Er vi ikke til stede så læg en besked, så vender vi tilbage hurtigst muligt. </p>
                <p>Er du allerede kunde så prøv vores nye forum og få hurtigt svar fra os eller andre brugere. </p>  
            </div>
            <form>
                <div className='input_wrapper'>
                    <label for="fname">navn</label>
                    <input type='text' required="true" id="fname" name="fname" placeholder='Skriv dit navn her'></input>
                </div>
                <div className='input_wrapper'>
                    <label for="mail">email</label>
                    <input required="true" type='email' id="mail" name="mail" placeholder='F.eks. Hans@hansen.dk'></input>
                </div>
                <div className='input_wrapper'>
                    <label>besked</label>
                    <textarea required="true" placeholder='Hvad ønsker du at skrive?'></textarea>
                </div>
                <PrimaryButton text='send'></PrimaryButton>
            </form>
        </section>
        <section id='contact_section'>
            <div className=''>
                <img className='icon' src='/telefon_ikon.svg'></img>
                <h3>Giv et opkald</h3>
                <p>+45 12 34 56 78</p>
            </div>
            <div>
                <img className='icon' src='/mail_ikon.svg'></img>
                <h3>send mail</h3>
                <p>Torben@bossinfo.dk</p>
            </div>
            <div>
                <img className='icon' src='/forum_ikon.svg'></img>
                <h3>besøg forum</h3>
                <a href='#'>Gå til forum</a>
            </div>
        </section>
    </>
    </>
    )

}

export default Contact