import React from 'react';
import { useNav } from '../customHooks/useNav';
import './About.css'
import { BsSpotify } from "react-icons/bs";

export default function About() {

	const aboutRef = useNav('About');

	return (
		<section ref={aboutRef} id='aboutContainer'>
			<h1 className = 'title'>ABOUT</h1>
				<p className = 'description'>
					My interests focus mainly around software development,
					music, and exercising. The rigorous demand of 
					my academic course load is balanced out by mental
					wellness disciplines such as listening to 
					tunes and cycling!
				</p>
			<a href='https://open.spotify.com/user/itsmejodie_12?si=4c8d72843f844994' target='_blank'>
				<BsSpotify className = 'spotifyIcon'/>
			</a>
		</section>
	);
}