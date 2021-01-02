import './SideBar.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';

const SideBar = () => {
	const classes = useStyles();
	return (
		<div className='sidebar-container'>
			<Grid container direction='column-reverse' justify='center' alignItems='center' xs={2}>
				<a href='https://github.com/andy-cameron' target='_blank' className='sidebar-icon'>
					<GitHubIcon className={classes.icon} />
				</a>
				<a
					href='https://www.linkedin.com/in/andrew-cameron-975169114/'
					target='_blank'
					className='sidebar-icon'
				>
					<LinkedInIcon className={classes.icon} />
				</a>
				<a className='sidebar-icon' href='mailto:aa.cameron@outlook.com'>
					<EmailIcon className={classes.icon} />
				</a>
			</Grid>
		</div>
	);
};

const useStyles = makeStyles({
	icon: {
		fontSize: 40,
		color: '#ededed'
	}
});

export default SideBar;
