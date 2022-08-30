import React from "react";
import { useNav } from '../customHooks/useNav';
import './Home.css'
export default function Home() {
	const homeRef = useNav('Home');
	const imgBackground = "/imgs/homescreenbackground.png";
	const logoBackground = '/imgs/jodielogo.png'
	return (
		<>
		<section ref={homeRef} id='homeContainer'>
			<img className = 'homeBackground' src={process.env.PUBLIC_URL + imgBackground}></img>
			<h1 className = 'header'>2A Computer Science Student at the University of Waterloo</h1>
			<p className = 'subtitle'>Seeking Summer 2023 Internships</p>
			<img className = 'logo' src={process.env.PUBLIC_URL + logoBackground}></img>
		</section>
		</>
	);
}