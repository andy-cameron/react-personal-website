import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withRouter } from 'react-router-dom';
import './Header.css';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		boxShadow: 'none',
		backgroundColor: '#242d42'
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	headerButton: {
		flex: 1,
		justifyContent: 'flex-end',
		backgroundColor: '#242d42'
	},
	title: {
		[theme.breakpoints.down('xs')]: {
			flexGrow: 1
		}
	},
	headerOptions: {
		display: 'flex',
		flex: 1,
		justifyContent: 'flex-end',
		background: '#242d42'
	}
}));

const Header = props => {
	const { history } = props;
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClick = pageURL => {
		history.push(pageURL);
		setAnchorEl(null);
	};

	const handleButtonClick = pageURL => {
		history.push(pageURL);
	};

	const menuItems = [
		{
			menuTitle: 'Home',
			pageURL: '/'
		},
		{
			menuTitle: 'About',
			pageURL: '/about'
		},
		{
			menuTitle: 'Projects',
			pageURL: '/projects'
		},
		{
			menuTitle: 'Contact',
			pageURL: '/contact'
		}
	];

	return (
		<div className={classes.root}>
			<AppBar position='static' style={{ background: 'none', boxShadow: 'none' }}>
				<Toolbar>
					{isMobile ? (
						<>
							<IconButton
								edge='start'
								className={classes.menuButton}
								color='inherit'
								aria-label='menu'
								onClick={handleMenu}
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								open={open}
								onClose={() => setAnchorEl(null)}
							>
								{menuItems.map(menuItem => {
									const { menuTitle, pageURL } = menuItem;
									return (
										<MenuItem onClick={() => handleMenuClick(pageURL)}>
											{menuTitle}
										</MenuItem>
									);
								})}
							</Menu>
						</>
					) : (
						<div className={classes.headerOptions}>
							<a
								className='header-button'
								variant='contained'
								onClick={() => handleButtonClick('/')}
							>
								<h1>HOME</h1>
							</a>
							<a
								className='header-button'
								variant='contained'
								onClick={() => handleButtonClick('/about')}
							>
								<h1>ABOUT</h1>
							</a>
							<a
								className='header-button'
								variant='contained'
								onClick={() => handleButtonClick('/projects')}
							>
								<h1>PROJECTS</h1>
							</a>
							<a
								className='header-button-contact'
								variant='contained'
								onClick={() => handleButtonClick('/contact')}
							>
								<h1>CONTACT ME</h1>
							</a>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default withRouter(Header);
