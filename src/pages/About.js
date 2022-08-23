import React from 'react';
import { useNav } from '../customHooks/useNav';
import { useParams } from 'react-router-dom';

export default function About() {

	const aboutRef = useNav('About');

	return (
		<section ref={aboutRef} id='aboutContainer'>
			<div>
				<h3>ABOUT</h3>
				<p>This is the about section</p>
			</div>
		</section>
	);
}