import React from "react";
import { useNav } from '../customHooks/useNav';
import './Home.css'
export default function Home() {
	const homeRef = useNav('Home');
	const imgBackground = "/imgs/homescreenbackground.png";
	const logoBackground = '/imgs/jodielogo.png'
	return (
		<>
		<section className = 'homeContainer' ref={homeRef} id='homeContainer'>
			<body>
				<img className = 'homeBackground' src={process.env.PUBLIC_URL + imgBackground}></img>
				<h1 className = 'header'>2B Computer Science Student at University of Waterloo</h1>
				<p className = 'subtitle'>Seeking Summer 2023 Internships</p>
				<div>
					<img className = 'logo' src={process.env.PUBLIC_URL + logoBackground}></img>
					<img className = 'aboutMePic' src={process.env.PUBLIC_URL + '/imgs/aboutme.png'}></img>
				</div>
			</body>
		</section>
		</>
	);
}