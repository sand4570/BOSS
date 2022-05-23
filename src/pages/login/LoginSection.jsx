
import { useState} from 'react'

const LoginSection = ({state, data}) => {

    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        if (data) {
           data.accounts.map((account) => {
               if (mail === account.email) {
                   if (password === account.password) {
                       window.location.href=`/forum?id=${account.id}`;
                   } else {console.log('wrong password')}
               } else {
                   console.log('false')
               }
               
           }) 
        }
    }

    const handleSignup = (event) => {
        console.log('default prevented')
        event.preventDefault()

        const account = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        }

        fetch("https://boss-info.herokuapp.com/api/accounts", {
            method: "post",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "api-key": "nSY1oe7pw05ViSEapg09D4gHG87yJCTX67uDa1OO",
              "cache-control": "no-cache"
            },
            body: JSON.stringify(account),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));

    }

    if (state === true) {
        return (
            <>
            <h3>Log ind</h3>
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
                        <button className='primaryButton' type='submit'>Log ind</button>
                    </div>
                    
                </form>
                </>
        )
    } else {
        return (
                <>
                <h3>Opret bruger</h3>
                <form onSubmit={handleSignup}>
                    <div className='name-input-wrapper'>
                    <div className='input-wrapper'>
                        <label htmlFor="fname" className='login-label'>Fornavn</label>
                        <input placeholder="Skriv dit fornavn her" id='fname' type='text' className='login-input' onChange={event => setFirstname(event.target.value)}></input>
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="lname" className='login-label'>Efternavn</label>
                        <input placeholder="Skriv dit efternavn her" id='lname' type='text' className='login-input' onChange={event => setLastname(event.target.value)}></input>
                    </div>
                    </div>
                    
                    <div className='input-wrapper'>
                        <label htmlFor='email' className='login-label'> EMAIL</label>
                        <input placeholder="Skriv din mail her" id='email' className='login-input' type='email' onChange={event => setEmail(event.target.value)}></input>
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor='password' className='login-label'>ADGANGSKODE</label>
                        <input placeholder="Skal indeholde mindst 6 tegn" id='password' className='login-input' type='password' onChange={event => setPassword(event.target.value)}></input>
                    </div>

                    <div className='button-wrapper'>
                        <button  className='primaryButton' type='submit'>Opret bruger</button>
                    </div>
                </form>
                </>
        )
    }
}

export default LoginSection