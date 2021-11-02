import React from 'react';

const Content = ({ content }) => (
    <div className="content__holder" id='content'>
        <div className='container'>
            <div className='columns'>
                <div className='column is-half is-offset-one-quarter'>
                    {content}
                </div>
            </div>
        </div>
    </div>
)

export default Content; 
