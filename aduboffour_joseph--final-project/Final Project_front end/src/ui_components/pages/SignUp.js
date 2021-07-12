
function SignUp(){

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
                <form class="signup_form_cntr" name="myForm" onSubmit="">
                        <input class="signup_form_name" id="myname" name="name" placeholder="Name" type="text"/>
                        <br/>
                        <br/>
                        <input class="signup_form_email" id="myemail" name="email_" type="email" placeholder="Email"/>
                        <br/>
                        <br/>
                        <input class="signup_form_password" id="mypassword" name="password" type="password" placeholder="Password"/>
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