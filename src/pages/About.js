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
					Hi everyone! My name is Jodie and I'm a Computer Science student at the 
					University of Waterloo. I've previously interned at MedMe
					Health and adnog technology as a software engineer, working 
					in agile environments, building backends, features, and infrastructure. 
				<br />
				<br />
					I am a curious learner and I love to apply my critical thinking and
					problem-solving skills to coding! Specifically, I enjoy full-stack
					development and data science with technologies including Python,
					React, and Java.
				<br />
				<br />
					Outside of work, my interests focus mainly around
					music and physical activity! Particularly, I love 
					creating seasonal Spotify playlists and going to spin class!
				</p>
			<a href='https://open.spotify.com/user/itsmejodie_12?si=4c8d72843f844994' target='_blank'>
				<BsSpotify className = 'spotifyIcon'/>
			</a>
		</section>
	);
}