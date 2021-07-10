import { Link } from 'react-router-dom'



function HomePage (){
    return (
    <div  class="homepage_bodybckg">
            <head>
                <title> Joseph A. - First Portfolio Website</title>
            </head>
                <header class="homepage_header">
                    <a href="homepage.html" class="homepage_headerlogo">JOEYZ<span style={{color:'rgb(92, 222, 240)'}}>WORLD.</span></a>
                    <nav>
                        <ul class="homepage_headerNav">
                            <li class="homepage_headerNavli"><Link class = "homepage_headerNavlink" to="ContactPage.js">CONNECT</Link></li>
                            <li class="homepage_headerNavli"><a class = "homepage_headerNavlink" href="Resume.js">SKILLS</a></li>
                            <li class="homepage_headerNavli"><a class = "homepage_headerNavlink" href="Portfolio.js">PORTFOLIO</a></li>
                            <li class="homepage_headerNavli"><a class = "homepage_headerNavlink" href="Homepage.js">HOME</a></li>
                        </ul>
                    </nav>
                </header>
                <h1 class="homepage_bodyhdr">Joseph Aduboffour,</h1> 
                <h1 class="homepage_bodyhdr2">Full Stack Software Engineer</h1>
                <p class="homepage_bodypara">
                    Hi, I create the Best Designs in this Space. 
                    <br/>Innovative and Futuristic. 
                    <br/>A Pathway to the Future.
                </p>
                <a class="homepage_bodylinks" href="portfolioPage.html">Explore Work</a>
                <a class="homepage_bodylinks" href="resumePage.html">View Profile</a>


    </div>
    
    )

}

export default HomePage;