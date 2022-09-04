import React from 'react';
import { useNav } from '../customHooks/useNav';
import { TbBrandLinkedin } from "react-icons/tb"; 
import { FiGithub } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import './Contact.css'

export default function Contact() {

	const contactRef = useNav('Contact');

	return (
		<section className = 'footer' ref={contactRef} id='contactContainer'>
            <div className = 'personalInfo'>
			<h1 className = 'name'>Jodie Zhu</h1>
            <h2>Candidate for Bachelors of Computer Science '26</h2>
            <h2>Faculty of Math</h2>
            <h2>University of Waterloo</h2>
            <h2 className = 'email'><u>j398zhu@uwaterloo.ca</u></h2>
            </div>
            <div className = 'icons'>
            <a className = 'linkedin' href='https://www.linkedin.com/in/jodie-zhu-8a1827210/' target='_blank'>
            <TbBrandLinkedin/>
            </a>
            <a className = 'github' href = 'https://github.com/jodiezhuu' target = '_blank'>
            <FiGithub/>
            </a>
            </div>
		</section>
	);
}