import React, {useState} from "react"
import { useHistory, useLocation } from 'react-router-dom'

function Login(){
    let history = useHistory();
    let location = useLocation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(true)

    const loginSubmit = async event => {
        
        event.preventDefault()
        const response = await fetch('http://localhost:4000/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({email, password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            setAuth(false)
        } else {
            sessionStorage.setItem('token', payload.token)

            let { from } = location.state || { from: { pathname: "/" } };
            history.replace(from);
        }
    }

    return (

        <div>
            <head>
                <title>Joseph A. - Login</title>
            </head>

            <body class="login_bodybckg">
                <header class="homepage_header">
                <a href="/" class="homepage_headerlogo">JOEYZ<span style={{color:'rgb(92, 222, 240)'}}>WORLD.</span></a>
                    <nav>
                    <ul class="homepage_headerNav">
                            <li class="homepage_headerNavli"><a className = "homepage_headerNavlink" href="/SignUp">SIGN UP</a></li>
                            <li class="homepage_headerNavli"><a className = "homepage_headerNavlink" href="/">HOME</a></li>
                        </ul>
                    </nav>
                </header>
                <h1 class="login_form_h">Login</h1>
                <form class="login_form_cntr" name="myForm" onSubmit={loginSubmit}>
                        <input class="login_form_email" id="myemail" name="email_" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <br/>
                        <br/>
                        <input class="login_form_password" id="mypassword" name="password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                        <br/>
                        <br/>
                        <br/>
                        <input class="login_form_submit" type="submit" value="SUBMIT" />
                    </form>
            </body>
        </div>


    ) 

}


export default Login;