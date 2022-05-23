import React from 'react'
import './style.scss'

const About = () => {
    return (
        <>
        <img id='form1' src='/form1.svg'></img>
        <>
            <h2>Missionen der gør BOSS ajour</h2>
            <section id='about_section'>
            <div>
            <h3>Hvem er Boss</h3>
            <p>BOSS Informatik blev startet i 1992 og har i alle årene været det mest anvendte system til VUC’er, Gymnasier og Erhvervsskoler…</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</p>
            </div>
            <img src='/bog_scan2.jpg' alt='bog bliver scannet'></img>
            </section>
            <section id='owner_section'>
                <div id='portrait_wrapper'>
                    <img src='/torben-portrait.jpg'></img>
                    <div id='owner_desk_wrapper'>
                        <p className='citat'>“ Det der er værd at gøre, er også værd at gøre godt “</p>
                        <p className='citat_afsender'>Torben Piilmann</p>
                    </div>
                </div>
                <div id='torben_wrapper'>
                    <h3>Torben Piilmann</h3>
                    <p>Torben er ejer af BOSS og manden der sørger for at systemet virker. Torben har uddannelse i søværnet som elektronik mekaniker, og er uddannet elektroniktekniker på Frederiksberg teknisk skole. Herudover har han i 2020 taget kursus i Cloud teknologi og database på CPH Business. Torben i mange år arbejdet som tekniker, hvor han har arbejdet med software og hardware. Inden han ejede BOSS arbejdede han hos TagVision som teknisk chef, og samarbejdede de sidste 10 år sammen med BOSS. Torben er en udpræget ‘gør det selv’ mand, som grundet gå på mod og nysgerrighed kan alt fra at undervise, til at bygge et hus eller reparere en bil eller båd. Hans mission er at modernisere og videreudvikle BOSS så systemet bliver mere brugervenligt. </p>
                </div>
                <img id='work_img' src='/torben-present.jpg'></img>
            </section>
            <section id='vision_section'>
                <div id='vision_wrapper'>
                <h3>Visioner for boss</h3>
                <p>BOSS har en vision om at flytte systemet til en moderne platform, hvor databasen bliver Cloud baseret, og data dermed ligger i skyen. Dette betyder at der vil være minimal vedligholdelse fra brugerens side og systemet automatisk vil blive opdateret. Du skal som bruger derfor ikke længere bruge tid på at opdatere, og opleve eventuelle udfordringer med dette. Visionen er dermed at BOSS systemet skal gøres moderne, så du som bruger får lettere ved at benytte systemet. </p>
                </div>
                <img src='/vision_grafik.png'></img>
            </section>
        </>
        <img id='form2' src='form2.svg'></img>
        </>
    )
}

export default About