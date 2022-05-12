const SignupSection = ({state}) => {

    console.log('state', state)

    if (state === false) {
        return (
            <form>
                    <div className='input-wrapper'>
                        <label htmlFor='email' className='login-label'> EMAIL</label>
                        <input id='email' className='login-input' type='email'></input>
                    </div>
                    
                    <div className='input-wrapper'>
                        <label htmlFor='password' className='login-label'>ADGANGSKODE</label>
                        <input id='password' className='login-input' type='password'></input>
                    </div>

                    <div className='button-wrapper'>
                        <button className='primaryButton' type='submit'>LOG IND</button>
                    </div>
                    
                </form>
        )
    } else {
        return (
            <>
                <p>Hvis du allerede benytter Boss men ikke har en bruger, så opret din bruger nedenfor.</p>
                <div className="button-wrapper">
                    <button className='secondaryButton'>OPRET BRUGER</button>
                </div>
                
            </>
        )
        
    }

}

export default SignupSection