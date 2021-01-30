import React from 'react';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';

const Friends = () => (
	<main>
		<Header title={'F.r.i.e.n.d.s.'}></Header>
		<div className='container'>
			<div className='columns mt-6'>
				<div className='column is-half is-offset-one-quarter'>
					<p classname='lead'>
						Here is an unordered list of friends, that run their own business
						and have a website. If you stumble accross this site, and I forgot
						you, please <a href='/contact'>give me a holler. </a>
					</p>

					<p>
						Bart from <a href='http://www.winemaker.com'>Winemaker.com</a>
						<br /> The finest wines in the country.
					</p>

					<p>
						<a href='https://www.marcopfleiderer-delivery.com/'>
							Marco pfleiderer Delivery
						</a>
						<br />
						The finest dining in the city.
					</p>

					<p>
						<a href='/https://www.cilgiapfleiderer.com/'>Cilgia pfleiderer</a>
						<br />
						Your inner child needs healing
					</p>

					<p>
						<a href='https://www.ebro.ch/'>Diego Brauchbar</a>
						<br /> Best developer in town. The name is the game.
					</p>

					<p>
						<a href='https://we-recruit.ch/de/'>Lee Diamant</a>
						<br /> Best recruiter since Uncle Sam in the 1940ies
					</p>

					<p>
						<a href='http://www.thepianosalon.ch/'>Sebastien Dupuis</a>
						<br /> Best Piano player since Chopin.
					</p>

					<p>
						<a href='https://www.feeltennis.ch/'>Naser Feeltennis</a>
						<br /> Best Tennis coach in town.
					</p>
				</div>
			</div>
		</div>
	</main>
);

export default Friends;
