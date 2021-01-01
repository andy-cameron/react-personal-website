import './Home.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typewriter from '../typewriter/Typewriter';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const Home = () => {
	const useStyles = makeStyles(theme => ({
		paper: {
			textAlign: 'center'
		}
	}));

	const classes = useStyles();

	return (
		<div className='home-container'>
			<Grid container spacing={3}>
				<Grid item xs={2}>
					<Paper className={classes.paper}>1</Paper>
				</Grid>
				<Grid item xs={8}>
					<div className='hi-there'>Hi there</div>
					<div className='typewriter-container'>
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
						<a className='resume-button'> Resume</a>
					</div>
				</Grid>
				<Grid item xs={2}>
					<Paper className={classes.paper}>3</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default Home;
