import './style.scss'

const LoginSection = ({state}) => {

    if (state === true) {
        console.log('return login')
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
        console.log('return other')
        return (
            <>
                <p>Hvis du allerede har en bruger, så log ind nedenfor.</p>
                <div className='button-wrapper'>
                    <button className='secondaryButton'>LOG IND</button>
                </div>
                
            </>
        )
    }
}

export default LoginSection