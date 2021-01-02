import './PageContainer.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SideBar from '../SideBar';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}));

const PageContainer = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
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

export default PageContainer;
