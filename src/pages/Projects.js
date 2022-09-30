import React from "react";
import { useNav } from '../customHooks/useNav';
import './Projects.css'
import { AiOutlineStock, AiFillGithub } from "react-icons/ai";
import { FcMoneyTransfer } from "react-icons/fc";
import Card from 'react-bootstrap/Card';

export default function Projects() {
    const projectsRef = useNav('Projects');
	return (
        <section className = 'projectsContainer' ref={projectsRef} id='projectsContainer'>
          <hr className='projectsPageBreak'></hr>
          <h1 className = 'projectsTitle'>PROJECTS</h1>
          <p className = 'projectsSubTitle'>
            Check out some of my favourite personal side projects! 
            Click on any card for additional information on each project!
          </p>
          <div className = 'columns'>
            <a href='https://github.com/jodiezhuu/StudyBuddy' target='_blank'>
              <Card className = 'firstCard'>
              <Card.Img className = 'studyIcon' src={process.env.PUBLIC_URL + '/imgs/studyBuddy.png'} />
              <Card.Body>
              <Card.Title className = 'titleCardOne'>
                <h1><b>StudyBuddy</b></h1>
              </Card.Title>
              <Card.Text>
              StudyBuddy is an iOS productivity app that runs a background
              timer and allows users to set the amount of time they want 
              to study for. At the end of each study session, users are 
              rewarded a collectable monster that can be checked on the 
              monster shelf. This was built with React Native, TS/JS, and
              Realm by MongoDB. 
              </Card.Text>
              </Card.Body>
              </Card>
            </a>
            <a href='https://github.com/jodiezhuu/SP500AlgoBot' target='_blank'>
              <Card className = 'secondCard'>
              <AiOutlineStock className = 'stockIcon'/>
              <Card.Body>
              <Card.Title><h1><b>S&P500AlgoBot</b></h1></Card.Title>
              <Card.Text>
              S&P500AlgoBot is a stock algorithm that dynamically analyzes live financial data 
              to produce the safest portfolio from a .csv file of US stock tickers using Python NumPy and Pandas.
              With our weight optimization algorithm, the original ticker list along with its optimal weightings is produced.
              </Card.Text>
              </Card.Body>
              </Card>
            </a>
            <a href='https://budgetbud.vercel.app/' target='_blank'>
              <Card className = 'thirdCard'>
              <FcMoneyTransfer className = 'budgetIcon'/>
              <Card.Body>
              <Card.Title><h1><b>BudgetBud</b></h1></Card.Title>
              <Card.Text>
              After users input their costs, BudgetBud returns
              back a recommended amount for individuals to save 
              and how much they should spend each month. This was 
              one of my first ever projects built with React/CSS!
              </Card.Text>
              </Card.Body>
              </Card>
              </a>
              </div>
              <a href='https://drive.google.com/file/d/1qAa_L49eThV-Fs2ABokElx6XblPM7nIC/view?usp=sharing' target = '_blank'>
              <button className = 'resumeButton'>DOWNLOAD CV</button>
              </a>
        </section>
	);
}