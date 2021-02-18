import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/Book_Cover.png'

const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'rick-f-leist-iii',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `Just a Couple of Days`,
                                spanFirst: ``,
                                imgSrc: Book1,
                                id: '',
                                content:
                                    `
                                        <p>
                                            The idea for “Just a Couple of Days” was an idea I’ve had for years. It wasn’t until I finally got help for my alcoholism that I was able to put it down on paper. It’s a fictional story of a miracle that happens to the character as a miracle had just happened in my life. It’s a story of hope! It tells us that as long as we have faith and there is breath in our bodies, we can rebuild our lives no matter how far down we have gone. 
                                        </p> 

                                    `,

                                ebooks: {
                                    stratton: 'https://www.stratton-press.com/books/just-a-couple-days/',
                                    barnes: 'https://www.barnesandnoble.com/w/just-a-couple-days-rick-michaels/1136626518?ean=9781643459233',
                                    amazon: 'https://www.amazon.com/dp/B085KN628M/ref=sr_1_1?keywords=9781643459233&qid=1583539112&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/dp/1643456385/ref=sr_1_1?keywords=9781643456386&qid=1583539188&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/just-a-couple-days-rick-michaels/1136626518?ean=9781643456386',
                                    booksamillion: 'https://www.booksamillion.com/p/Just-Couple-Days/Rick-Michaels/9781643456386?id=8043859463603&_ga=2.47277540.2129510319.1604547756-131468970.1604385963',
                                }
                            }}
                        />

                        <div className="commentSection">
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;