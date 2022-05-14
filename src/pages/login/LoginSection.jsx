
import { useState, useCallback } from 'react'

//import './style.scss'

const LoginSection = ({state, data, onButtonClick}) => {

    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    //console.log('data1', data)

    const handleClick = useCallback(() => {
        console.log("yes i should be false hello")
        onButtonClick(state)
      }, [onButtonClick])

    const handleSubmit = (event) => {
        event.preventDefault()

        if (data) {
           data.map((account) => {
               if (mail === account.email) {
                   if (password === account.password) {
                       window.location.href=`/?id=${account._id}`;
                   } else {console.log('wrong password')}
               } else {
                   console.log('false')
               }
               
           }) 
        }
        console.log('data', data)
    }

    if (state === true) {
        return (
            <form onSubmit={handleSubmit}>
                    <div className='input-wrapper'>
                        <label htmlFor='email' className='login-label'> EMAIL</label>
                        <input placeholder="Skriv din mail her" id='email' className='login-input' type='email' onChange={event => setMail(event.target.value)}></input>
                    </div>
                    
                    <div className='input-wrapper'>
                        <label htmlFor='password' className='login-label'>ADGANGSKODE</label>
                        <input placeholder="Skal indeholde mindst 6 tegn" id='password' className='login-input' type='password' onChange={event => setPassword(event.target.value)}></input>
                    </div>
                    
                    <div className='button-wrapper'>
                        <button className='primaryButton' type='submit'>LOG IND</button>
                    </div>
                    
                </form>
        )
    } else {
        return (
            <>
                <p>Hvis du allerede har en bruger, så log ind nedenfor.</p>
                <div className='button-wrapper'>
                    <button onClick={handleClick} className='secondaryButton'>LOG IND</button>
                </div>
                
            </>
        )
    }
}





export default LoginSection