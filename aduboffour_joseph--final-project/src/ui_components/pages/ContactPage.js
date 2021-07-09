function ContactPage (){
    return (
         <div>
            <head>
                <title>Joseph A. - Contact Me</title>
            </head>

            <body class="contact_bodybckg">
                <header class="homepage_header">
                    <a href="homepage.html" class="homepage_headerlogo">JOEYZ<span style={{color:'rgb(92, 222, 240)'}}>WORLD.</span></a>
                    <nav>
                        <ul class="homepage_headerNav">
                            <li class="homepage_headerNavli"><a class = "homepage_headerNavlink" href="contactPage.html">CONNECT</a></li>
                            <li class="homepage_headerNavli"><a class = "homepage_headerNavlink" href="resumePage.html">SKILLS</a></li>
                            <li class="homepage_headerNavli"><a class = "homepage_headerNavlink" href="portfolioPage.html">PORTFOLIO</a></li>
                            <li class="homepage_headerNavli"><a class = "homepage_headerNavlink" href="homepage.html">HOME</a></li>
                        </ul>
                    </nav>
                </header>
                <section class="contact_section">
                    <h1 class="contact_form_h">Contact me</h1>
                    <p class="contact_form_para">
                        I'm interested in freelance opportunities - especially ambitious or large projects.<br/>
                        However, for further information, requests and clarifications, dont hesitate to use
                        <br/>the form below.
                    </p>
                    <form class="contact_form_cntr" name="myForm" onsubmit="return validateForm()" method="POST">
                        <input class="contact_form_name" id="myname" name="name" placeholder="Name" type="text"/>

                        <input class="contact_form_email" id="myemail" name="email_" type="email" placeholder="Email"/>
                        <br/>
                        <br/>
                        <input class="contact_form_subject" id="mysubject" name="subject" type="text" placeholder="Subject"/>
                        <br/>
                        <br/>
                        <textarea class="contact_form_message" id="myquestion" name="question" type="text" placeholder="Message" maxlength="300"></textarea>
                        <br/>
                        <br/>
                        <input class="contact_form_submit" type="submit" value="SUBMIT" />
                    </form>
                </section>

            </body>


        </div>

    );
}
/*
                        function validateForm()
                        {
                            let x = document.forms["myForm"]["name"].value;
                            let y = document.forms["myForm"]["email_"].value;
                            let z = document.forms["myForm"]["subject"].value;
                            let v = document.forms["myForm"]["question"].value;
                            if (x === "" || y === "" || z === "" || v === "")
                            {
                                if (x === "" )
                                {
                                    alert("Name must be filled out");
                                    return false;
                                }
                                if (y === "" )
                                {
                                    alert("Email must be filled out");
                                     return false;
                                }
                                if (z === "" )
                                {
                                    alert("Subject must be filled out");
                                    return false;
                                }
                                if (v === "" ){
                                    alert("Message must be filled out");
                                    return false;
                                }
                    
                            }
                        }
*/

export default ContactPage;