import React from 'react';
import Header from '../components/Header/Header';

const Friends = () => (
	<main>
		<Header title={'F.r.i.e.n.d.s.'}></Header>
		<div className='contentWrapper'>
			<div className='container' id='content'>
				<div className='columns mt-6'>
					<div className='column is-half is-offset-one-quarter'>
						<p classname='lead'>
							Here is an unordered list of friends, that run their own business
							and have a website. If you stumble accross this site, and I forgot
							you, please <a href='/contact'>give me a holler.</a>
						</p>

						<p>
							Bart from <a href='http://www.winemaker.com'>Winemaker.com</a> has
							the finest wines in the country.
						</p>

						<p>
							If you want to have the high class restaurant feeling at home,
							consider{' '}
							<a href='https://www.marcopfleiderer-delivery.com/'>
								Marco Pfleiderer Delivery.
							</a>
						</p>

						<p>
							Visit{' '}
							<a href='/https://www.cilgiapfleiderer.com/'>Cilgia pfleiderer</a>
							if you feel that your inner child needs healing.
						</p>

						<p>
							Need a fast and reliable developper? Consider{' '}
							<a href='https://www.ebro.ch/'>Diego Brauchbar</a>, aka Ebro.ch
						</p>

						<p>
							Lee Diamant from{' '}
							<a href='https://we-recruit.ch/de/'>we-recruit</a>. He is the best
							recruiter since Uncle Sam in the 1940ies.
						</p>

						<p>
							<a href='http://www.thepianosalon.ch/'>Sebastien Dupuis</a> is my
							piano professor, and the best player since chopin.
						</p>

						<p>
							Train like a pro with{' '}
							<a href='https://www.feeltennis.ch/'>Naser Feeltennis</a>.
						</p>
					</div>
				</div>
			</div>
		</div>
	</main>
);

export default Friends;
