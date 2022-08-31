import React from 'react';
import { useNav } from '../customHooks/useNav';
import './About.css'

export default function About() {

	const aboutRef = useNav('About');

	return (
		<section ref={aboutRef} id='aboutContainer'>
			<div>
				<h1 className='header'>ABOUT ME</h1>
				<p>This is the about section</p>
			</div>
		</section>
	);
}