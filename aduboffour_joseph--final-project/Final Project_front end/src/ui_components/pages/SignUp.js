import React, {useState} from "react"

function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const formSubmit = async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name, email, password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
        } else {
            alert(`Congrats! You are Signed Up with id: ${payload.id}`)
        }
    }

    return(

        <div>
            <head>
                <title>Joseph A. - SignUp</title>
            </head>

            <body class="signup_bodybckg">
                <header class="homepage_header">
                <a href="/" class="homepage_headerlogo">JOEYZ<span style={{color:'rgb(92, 222, 240)'}}>WORLD.</span></a>
                    <nav>
                    <ul class="homepage_headerNav">
                            <li class="homepage_headerNavli"><a className = "homepage_headerNavlink" href="/Login">LOGIN</a></li>
                            <li class="homepage_headerNavli"><a className = "homepage_headerNavlink" href="/">HOME</a></li>
                        </ul>
                    </nav>
                </header>
                <h1 class="signup_form_h">Sign Up</h1>
                <form class="signup_form_cntr" name="myForm" onSubmit={formSubmit}>
                        <input class="signup_form_name" id="myname" name="name" placeholder="Name" type="text" value={name} onChange={e => setName(e.target.value)}/>
                        <br/>
                        <br/>
                        <input class="signup_form_email" id="myemail" name="email_" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <br/>
                        <br/>
                        <input class="signup_form_password" id="mypassword" name="password" type="password" placeholder="Password" value={name} onChange={e => setPassword(e.target.value)}/>
                        <br/>
                        <br/>
                        <br/>
                        <input class="signup_form_submit" type="submit" value="SUBMIT"/>
                    </form>
            </body>
        </div>


    ) 

}


export default SignUp;