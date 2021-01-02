import React from 'react';
import Grid from '@material-ui/core/Grid';
import SideBar from '../SideBar';

const Projects = () => {
	return (
		<div>
			<Grid container>
				<Grid className='div-container' item xs={2} style={{ background: 'white' }}></Grid>
				<Grid item xs={8} style={{ background: 'red' }}></Grid>
				<Grid
					item
					xs={2}
					direction='column'
					justify='center'
					alignItems='center'
					style={{ background: 'blue' }}
				>
					<SideBar />
				</Grid>
			</Grid>
		</div>
	);
};

export default Projects;
