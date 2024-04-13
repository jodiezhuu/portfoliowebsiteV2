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
					University of Waterloo. I've previously interned at Cambio AI, Tech Matters, MedMe
					Health, and adnog technology as a software engineer, working 
					in agile environments, building backends, features, and infrastructure. 
				<br />
				<br />
					I enjoy mind puzzles and translating these skills to my personal side projects and
					in the professional workplace. Specifically, I have experience with full-stack
					and iOS development, specializing in frameworks like React and Django.
				<br />
				<br />
					In my off time, I like to stay physically active. Particularly, I'm an 
					amateur golfer and a spin addict!
				</p>
			<a href='https://open.spotify.com/user/itsmejodie_12?si=4c8d72843f844994' target='_blank'>
				<BsSpotify className = 'spotifyIcon'/>
			</a>
		</section>
	);
}