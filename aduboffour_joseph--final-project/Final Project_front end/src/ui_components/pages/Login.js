
function Login(){



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
                <form class="login_form_cntr" name="myForm" onSubmit="">
                        <input class="login_form_email" id="myemail" name="email_" type="email" placeholder="Email"/>
                        <br/>
                        <br/>
                        <input class="login_form_password" id="mypassword" name="password" type="password" placeholder="Password"/>
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