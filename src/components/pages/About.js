import React from 'react';
import Grid from '@material-ui/core/Grid';

const About = () => {
	return (
		<div>
			<Grid className='home-container'>
				<Grid container spacing={3}>
					<Grid item xs={2}>
						1
					</Grid>
					<Grid item xs={8}>
						2
					</Grid>
					<Grid item xs={2}>
						3
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default About;
