import React from 'react';
import Intro from '../components/Intro/Intro';

import Layout from '../components/Layout/Layout';

const IndexPage = () => {
	return (
		<Layout withHeader={false}>
            <Intro />
        </Layout>
	);
};

export default IndexPage;
