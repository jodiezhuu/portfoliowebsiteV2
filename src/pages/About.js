import React from 'react';
import { useNav } from '../customHooks/useNav';
import './About.css'
import { BsSpotify } from "react-icons/bs";

export default function About() {

	const aboutRef = useNav('About');

	return (
		<section ref={aboutRef} id='aboutContainer'>
			<h1 className = 'aboutTitle'>ABOUT</h1>
				<p className = 'description'>
					My interests focus mainly around software development,
					music, and exercising. Particularly, I'm interested in full
					stack development and data engineering. On the contrary, 
					in order to balance my stress, I enjoy practicing mental
					wellness disciplines such as listening to 
					tunes and going to spin class!
				</p>
			<a href='https://open.spotify.com/user/itsmejodie_12?si=4c8d72843f844994' target='_blank'>
				<BsSpotify className = 'spotifyIcon'/>
			</a>
		</section>
	);
}