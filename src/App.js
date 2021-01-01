import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({});

export default function App() {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Header />
			<Switch>
				<Route exact from='/' render={props => <Home {...props} />} />
				<Route exact path='/contact' render={props => <Contact {...props} />} />
				<Route exact path='/about' render={props => <About {...props} />} />
				<Route exact path='/projects' render={props => <Projects {...props} />} />
			</Switch>
		</div>
	);
}
