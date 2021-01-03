import './About.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import SideBar from '../SideBar';
import PageContainer from './PageContainer';
import { DiJava, DiJsBadge, DiReact, DiAndroid, DiGit } from 'react-icons/di';

const About = () => {
	return (
		<div className='div-container'>
			<Grid>
				<Grid container className='about-container'>
					<Grid className='item-1' item xs={10}>
						<div className='about-text-container'>
							<h1>About Me</h1>
							<div className='p-container'>
								<p>
									Hi there! My name is Andy - I am young developer and I have a
									BEng in Software Engineering from the University of Ulster,
									Northern Ireland. Throughout my time in the tech industry I have
									been exposed to a plethora of skills and technologies. During my
									studies I spent my industrial placement in Amsterdam at
									IceMobile where I worked as an Android Developer Intern. I
									carried on this interest into Android Development with my Final
									Year Project where I developed a loyalty-based application that
									encouraged organisations to be more sustainable. After I
									graduated in 2019 I worked as a Data Management Consultant in
									Belfast, Northern Ireland for Datactics.
									<br />
									<br />I am currently on the lookout for my next challenge, as I
									have now steered away from the discipline of consultancy and
									focusing more on development. I have been exposed to your
									mainstream languages through my studies such as Java and Python.
									I have also become involved in React and React-Native.
								</p>
							</div>
						</div>

						<Grid
							container
							direction='row'
							justify='space-around'
							alignItems='center'
							className='tech-stack'
						>
							<DiJava />
							<DiJsBadge />
							<DiReact />
							<DiAndroid />
							<DiGit />
						</Grid>
					</Grid>
					<Grid
						className='about-sidebar'
						item
						xs={2}
						direction='column'
						justify='center'
						alignItems='center'
					>
						<SideBar />
					</Grid>
				</Grid>
			</Grid>
			<div className='image-container'>
				<div className='triangle-bottomleft'></div>
			</div>
		</div>
	);
};

export default About;
