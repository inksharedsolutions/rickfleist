import React from 'react';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Banner from '../components/banner';
import MidBook from '../components/front-book';
import Author from '../components/author';
import FeaturedLogos from '../components/mid-main';

const IndexPage = (props) => (
	<Layout>
		<Nav pathExt={props.path} />
		<Banner />
		<MidBook />
		<Author />
		<FeaturedLogos />
	</Layout>
);

export default IndexPage;
