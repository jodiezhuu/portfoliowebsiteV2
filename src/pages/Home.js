import React from "react";
import { useNav } from '../customHooks/useNav';

export default function Home() {
	const homeRef = useNav('Home');

	return (
		<section ref={homeRef} id='homeContainer'>
			<div>
				<h3>home</h3>
				<p>This is the home section</p>
			</div>
		</section>
	);
}