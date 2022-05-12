import React from 'react';
import { useState } from 'react';

const SliderText = (state) => {
    if (state === 'login') {
        return (
            <>
                <h2>OPRET BRUGER</h2>
                <p>Hvis du allerede benytter Boss men ikke har en bruger, så opret din bruger nedenfor.</p>
                <button className='secondaryButton'>OPRET BRUGER</button>
            </>
        )
    } else if (state === 'signup') {
        return (
            <>
                <h2>LOG IND</h2>
                <p>Hvis du allerede har en bruger, så log ind nedenfor.</p>
                <button className='secondaryButton'>LOG IND</button>
            </>
        ) 
    }
}

export default SliderText