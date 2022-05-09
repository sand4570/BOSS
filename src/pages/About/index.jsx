import React from 'react'
import PrimaryButton from '../../components/PrimaryButton'
import './style.scss'

const About = () => {
    return(
    <>
        <section id='form_section'>
            <div>
                <h2>Kontakt os</h2>
                <p>Kontakt BOSS via formularen eller ring til os. Er vi ikke til stede så læg en besked, så vender vi tilbage hurtigst muligt. </p>
                <p>Er du allerede kunde så prøv vores nye forum og få hurtigt svar fra os eller andre brugere. </p>  
            </div>
            <form>
                <div className='input_wrapper'>
                    <label>navn</label>
                    <input type='text'></input>
                </div>
                <div className='input_wrapper'>
                    <label>email</label>
                    <input type='text'></input>
                </div>
                <div className='input_wrapper'>
                    <label>besked</label>
                    <textarea></textarea>
                </div>
                <PrimaryButton text='send'></PrimaryButton>
            </form>
        </section>
        <section id='contact_section'>
            <div className=''>
                <img className='icon' src='/telefon_ikon.svg'></img>
                <h2>Ring til os</h2>
                <p>+45 12 34 56 78</p>
            </div>
            <div>
                <img className='icon' src='/mail_ikon.svg'></img>
                <h2>mail</h2>
                <p>Torben@bossinfo.dk</p>
            </div>
            <div>
                <img className='icon' src='/forum_ikon.svg'></img>
                <h2>besøg forum</h2>
                <a href='#'>Gå til forum</a>
            </div>
        </section>
    </>
    )

}

export default About