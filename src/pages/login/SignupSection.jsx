import React, { useCallback, useState } from 'react'

const SignupSection = ({state, onButtonClick}) => {

    const handleClick = useCallback(() => {
        onButtonClick(!state)
      }, [onButtonClick])

    if (state === false) {
        return (
            <form>
                    <div className='input-wrapper'>
                        <label htmlFor='email' className='login-label'> EMAIL</label>
                        <input placeholder="Skriv din mail her" id='email' className='login-input' type='email'></input>
                    </div>
                    
                    <div className='input-wrapper'>
                        <label htmlFor='password' className='login-label'>ADGANGSKODE</label>
                        <input placeholder="Skal indeholde mindst 6 tegn" id='password' className='login-input' type='password'></input>
                    </div>

                    <div className='button-wrapper'>
                        <button  className='primaryButton' type='submit'>OPRET BRUGER</button>
                    </div>
                </form>
        )
    } else {
        return (
            <>
                <p>Hvis du allerede benytter BOSS men ikke har en bruger, så opret din bruger nedenfor.</p>
                <div className="button-wrapper">
                    <button onClick={handleClick} className='secondaryButton'>OPRET BRUGER</button>
                </div>
                
            </>
        )
        
    }

}

export default SignupSection