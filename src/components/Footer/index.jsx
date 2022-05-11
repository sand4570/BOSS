import React from 'react'
import './footer.scss'


const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer>
            <div id='footer_container'>
            <div id='footer_wrapper'>
            <div id='support'>
                <h4>SUPPORT</h4>
                <p> +45 30 14 15 49 <br/> Torben@bossinfo.dk <br/> Kornvænget 8 <br/> 3550 Slangerup <br/> CVR: 42242144 </p>
            </div>
            <div id='links'>
                <a href=''>FORSIDE</a>
                <a href=''>OM BOSS</a>
                <a href=''>KONTAKT</a>
                <a href=''>LOGIN</a>
            </div>
            </div>
            <button onClick={goToTop}>
            <img className='' width='30' src='/up_arrow.svg'></img>
            </button>
            </div>
            <p id='copyright'>ⓒ All copyrights reserved | {year}</p>
        </footer>
    )
}

export default Footer