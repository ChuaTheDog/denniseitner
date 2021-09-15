import React from 'react';
import Intro from '../components/Intro/Intro';
import Image from '../components/Image/Image';

import Page from '../components/Page/Page';

// markup
const IndexPage = () => {
	return (
		<Page>
            <main>
                <Intro></Intro>
            </main>
        </Page>
	);
};

export default IndexPage;
