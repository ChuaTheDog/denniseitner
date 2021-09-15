import React from 'react';

import Layout from '../Layout/Layout';

const Page = ({ children }) => {
    return (
        <Layout>
            {children}
        </Layout>
    );
};

export default Page;