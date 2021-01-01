import './Home.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typewriter from '../typewriter/Typewriter';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import SideBar from '../SideBar';

const Home = () => {
	return (
		<Grid className='home-container'>
			<Grid container spacing={3}>
				<Grid item xs={2}></Grid>
				<Grid item xs={8}>
					<Grid
						container
						direction='column'
						justify='space-between'
						alignItems='flex-start'
					>
						<div>
							<div className='typewriter-container'>
								<div className='hi-there'>Hi there</div>
								<Typewriter
									className='typewriter'
									texts={[
										'Andy',
										'living in Belfast',
										'a developer',
										'looking for work',
										'experienced in React',
										'experienced in Android',
										'experienced in Java'
									]}
								/>
							</div>

							<div className='resume-container'>
								<a className='resume-button'>Resume</a>
							</div>
						</div>
					</Grid>
				</Grid>

				<SideBar></SideBar>
			</Grid>
		</Grid>
	);
};

export default Home;
