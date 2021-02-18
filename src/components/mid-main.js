import React from 'react'
import Logo1 from '../../static/logo/amazon.png'
import Logo2 from '../../static/logo/bam.png'
import Logo3 from '../../static/logo/Barnes-and-noble-booksellers-logo.png'
import Logo4 from '../../static/logo/stratton-logo.png'

const MidMain = () => {
    return (
        <>
            <section className="radio-interview">
                <div className="container-gt">
                    <div className="grid-two-columns">
                        <div class="grid-child">
                            <h5>Rick Michaels</h5>
                            <h1><span>Book</span><span>Trailer</span></h1>
                            <p>Just like how the story of the book goes, the process in writing it was also a journey. Hear about it from the author himself. Click the play button and learn more.</p>
                        </div>
                        <div class="grid-child">
                            <iframe src="https://www.youtube.com/embed/gez2f92mL6A?rel=0" width="100%" height="400" title="TWIA: Just a Couple Days by Rick Michaels"></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mid-main">
                <div className="container-gt separator-line">
                    <h1>Featured</h1>
                    <p className="middle-params">
                        Rick Michaels has been featured numerous times on...
                    </p>

                    <div className="grid-template-four-col" id="logos-col">
                        <li>
                            <img src={Logo1} alt="Amazon logo"/>
                        </li>

                        <li>
                            <img src={Logo2} alt="Books A Million logo"/>
                        </li>

                        <li>
                            <img src={Logo3} alt="Barnes &amp; Noble logo"/>
                        </li>

                        <li>
                            <img src={Logo4} alt="Stratton Press logo"/>
                        </li>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MidMain;