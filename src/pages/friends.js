import React from 'react';

import Layout from '../components/Layout/Layout';
import Seo from '../components/SEO/SEO';

const Friends = () => (
    <Layout>
        <Seo title='Friends' />
        <div className='contentWrapper'>
            <div className='container' id='content'>
                <div className='columns mt-6'>
                    <div className='column is-half is-offset-one-quarter'>
                        <p className='lead'>
                            Here is an unordered list of friends, that run their own business
                            and have a website. If you stumble accross this site, and I forgot
                            you, please <a href='/contact'>give me a holler.</a>
                        </p>
                        <p>
                            <a href='http://www.torstenschallmaier.com' target="_blank" rel="noreferrer noopener">
                                Thorsten Schallmaier
                            </a>{' '}
                            is an awesome at writing (creative) texts.
                        </p>
                        <p>
                            Bart from <a href='http://www.winemaker.com' target="_blank" rel="noreferrer noopener">Winemaker.com</a> has
                            the finest wines in the country.
                        </p>
                        <p>
                            If you want to have the high class restaurant feeling at home,
                            consider{' '}
                            <a href='https://www.marcopfleiderer-delivery.com/' target="_blank" rel="noreferrer noopener">
                                Marco Pfleiderer Delivery.
                            </a>
                        </p>
                        <p>
                            Visit{' '}
                            <a href='/https://www.cilgiapfleiderer.com/' target="_blank" rel="noreferrer noopener">Cilgia pfleiderer</a>{' '}
                            if you feel that your inner child needs healing.
                        </p>
                        <p>
                            Need a fast and reliable developper? Consider{' '}
                            <a href='https://www.ebro.ch/' target="_blank" rel="noreferrer noopener">Diego Brauchbar</a>, aka Ebro.ch
                        </p>
                        <p>
                            Lee Diamant from{' '}
                            <a href='https://we-recruit.ch/de/' target="_blank" rel="noreferrer noopener">we-recruit</a>. He is the best
                            recruiter since Uncle Sam in the 1940ies.
                        </p>
                        <p>
                            Train like a pro with{' '}
                            <a href='https://www.feeltennis.ch/' target="_blank" rel="noreferrer noopener">Naser Feeltennis</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default Friends;
