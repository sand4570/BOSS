import React from 'react'
import {useLocation, Link} from 'react-router-dom';

import './style.scss'
import PrimaryButton from '../../components/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton'




const Frontpage = () => {
    const { search } = useLocation()

    return (
        <>
            <section id='splash_section'>
                <img src='/splash.png'></img>
                <h1>Udlånsstyring af bøger, computere og mere</h1>
                <p>BOSS er et specialiseret værktøj til styring af udlån af bøger, computere, iPads, kameraer, cykler og meget andet</p>
                <button className='CTA'><Link to={`contact${search}`}>Kom i kontakt</Link></button>
            </section>
            <section id='icons_section'>
                <div>
                    <img src='/puzzle_ikon.svg' className='icon'></img>
                    <h2>Tæt integrering</h2>
                    <p>Boss er tæt integreret med Ludus, Lectio, Uddata+ og Tabulex.</p>
                </div>
                <div>
                    <img src='/books_ikon.svg' className='icon'></img>
                    <h2>alt i en</h2>
                    <p>Boss indeholder alle rutiner til udlån, aflevering og efterfølgende regningshåndtering.</p>
                </div>
                <div>
                    <img src='/tools_ikon.svg' className='icon'></img>
                    <h2>særlige værktøjer</h2>
                    <p>Boss har mange særlige værktøjer som går udover det almindelige bogdepots funktioner bl.a. WebBoss.</p>
                </div>
            </section>
            <section id='forum_section'>
                <img src='/kvinde_ved_computer1.png'></img>
                <div>
                    <h2>Få hurtig og nem vejledning</h2>
                    <p>Står du og mangler en løsning på et problem som du ikke kan løse. Prøv Boss’ nye forum hvor du hurtigt og nemt kan få vejledning eller svar på dine spørgsmål, af Boss eller andre brugere. I forummet kan du finde svar på ofte stillede spørgsmål, stille et nyt spørgsmål samt hjælpe andre med at finde en løsning. Har du et ønske eller forespørgsel kan dette også gøres via. forummet. <br/>Kom i gang og bliv en del af fællesskabet, ved at oprette en bruger i dag, og oplev den nye funktion.</p>
                    <SecondaryButton text={"Gå til forum"}></SecondaryButton>
                </div>
            </section>
            <section id='boss_section'>
                <div>
                    <h2>hvad er boss</h2>
                    <p>Boss er et system til udlånsstyring af bøger computere, ipads og mere. Boss har i dag over 200 installationer og benyttes af gymnasier, VUC’er og handelsskoler hele Danmark. <br/>Boss håndterer oprettelse af bøger, udlån, hjemkaldelse og regningshåndtering. Herunder er håndtering af e- og i-bøger indbygget, og udlån kan registrerestitel- eller eksemplarbaseret. <br/>Boss er tæt integreret med Ludus, Lectio, Uddata+ og Tabulex og har en række ekstra værktøjer, der gør det endnu nemmere at bruge bl.a WebBoss, der giver undervisere mulighed for at bestille og hjemkalde bøger til deres hold. </p>
                </div>
                <img src='/girls_chat2.png'></img>
            </section>
            <section id='review_section'>
                <h3 className='citat'>“ Med BOSS er der altid styr på vores bøger. Det er nemt og hurtigt og jeg er bare så glad for at bruge det ”</h3>
                <p className='citat_afsender'>Knud Hansen</p>
            </section>
         </>
    )
}

export default Frontpage