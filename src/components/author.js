import React from 'react'
import AuthorImg from '../../static/author/main_author.jpg'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p>
                            My name is Rick. I grew up in Louisville, Kentucky. I drank and used drugs for over twenty years—years that went by in a blur.
                        </p>

                        <h1 className="author-name-tag">
                            <span>Rick</span>
                            <span>Michaels</span>
                        </h1>

                        <span className="author-tagline">
                            Author & Writer
                        </span>

                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;