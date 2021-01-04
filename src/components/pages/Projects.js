import './Projects.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import SideBar from '../SideBar';

const Projects = () => {
	return (
		<div className='projects-container'>
			<Grid container>
				<Grid className='div-container' item xs={2}></Grid>
				<Grid item xs={8}>
					<br />
					<br />
					<br />
					Under Construction...
				</Grid>
				<Grid item xs={2} direction='column' justify='center' alignItems='center'>
					<SideBar />
				</Grid>
			</Grid>
		</div>
	);
};

export default Projects;
