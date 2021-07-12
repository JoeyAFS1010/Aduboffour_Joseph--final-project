import Project_1 from '../Images/Project 2 - image.png'
import Project_2 from '../Images/Project 1 - imageA.png'
import Project_3 from '../Images/Project 3 - Image.png'
import Project_4 from '../Images/Project 4 - Image.webp'
import Project_5 from '../Images/Project 5 - Image.png'

function Portfolio (){
    return (

        <div style={{height:'100%'}}>
            <head>
                <title> Joseph A. - Projects </title>
            </head>
            <body class="portfolio_bodybckg">
                <header class="homepage_header">
                <a href="/" class="homepage_headerlogo">JOEYZ<span style={{color:'rgb(92, 222, 240)'}}>WORLD.</span></a>
                <nav>
                        <ul class="homepage_headerNav">
                            <li class="homepage_headerNavli"><a className= "homepage_headerNavlink" href="/ContactPage">CONNECT</a></li>
                            <li class="homepage_headerNavli"><a className = "homepage_headerNavlink" href="/Resume">SKILLS</a></li>
                            <li class="homepage_headerNavli"><a className = "homepage_headerNavlink" href="/Portfolio">PORTFOLIO</a></li>
                            <li class="homepage_headerNavli"><a className = "homepage_headerNavlink" href="/">HOME</a></li>
                        </ul>
                </nav>
                </header>    
                <h1 class="portfolio_h">World Of Works</h1>
        <section class="portfolio_section">
            <a href="https://www.nickelfox.com/" target="_blank" rel="noreferrer"><img class="portfolio_section2_img" src={Project_1} alt="Project 1"/></a>
        </section>
        <section class="portfolio_section_2">
            <a href="https://www.nickelfox.com/" target="_blank" rel="noreferrer"><img class="portfolio_section_img" src={Project_2} alt="Project 2"/></a>
        </section>
        <section class="portfolio_section_3">
            <a href="https://www.nickelfox.com/" target="_blank" rel="noreferrer"><img class="portfolio_section3_img" src={Project_3} alt="Project 3"/></a>
        </section>
        <section class="portfolio_section_4">
            <a href="https://www.nickelfox.com/" target="_blank" rel="noreferrer"><img class="portfolio_section3_img" src={Project_4} alt="Project 4"/></a>
        </section>
        <section class="portfolio_section_5">
            <a href="https://www.nickelfox.com/" target="_blank" rel="noreferrer"><img class="portfolio_section3_img" src={Project_5} alt="Project 5"/></a>
            <a class="portfoliopage_bodylinks" href="/Resume">View Profile</a>
        </section>


       
    </body>

    </div>

    )


}

export default Portfolio;