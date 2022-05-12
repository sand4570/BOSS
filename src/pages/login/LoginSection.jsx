import { useState } from 'react'
import './style.scss'

const LoginSection = ({state, data}) => {

    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    console.log('data1', data)

    const handleSubmit = (event) => {
        event.preventDefault()

        if (data) {
           data.map((account) => {
               if (mail === account.email) {
                   if (password === account.password) {
                       console.log('login')
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
                        <input id='email' className='login-input' type='email' onChange={event => setMail(event.target.value)}></input>
                    </div>
                    
                    <div className='input-wrapper'>
                        <label htmlFor='password' className='login-label'>ADGANGSKODE</label>
                        <input id='password' className='login-input' type='password' onChange={event => setPassword(event.target.value)}></input>
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
                    <button className='secondaryButton'>LOG IND</button>
                </div>
                
            </>
        )
    }
}





export default LoginSection