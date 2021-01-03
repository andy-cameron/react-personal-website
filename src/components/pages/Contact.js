import './Contact.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaMediumM } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
	return (
		<div className='page-container'>
			<div className='name-placeholder'>
				<b>Andy</b> Cameron
			</div>
			<Grid
				container
				className='contact-container'
				direction='row'
				justify='flex-start'
				alignItems='center'
			>
				<Grid className='contact-info' direction='column'>
					<div className='find-me'>Find me on</div>
					<div className='contact-info-row'>
						<MdEmail className='contact-icon' />
						<a href='mailto:aa.cameron@outlook.com'>
							<b>aa.cameron</b>@outlook.com
						</a>
					</div>
					<div className='contact-info-row'>
						<AiFillLinkedin className='contact-icon' />
						<a
							href='https://www.linkedin.com/in/andrew-cameron-975169114/'
							target='_blank'
						>
							www.linkedin.com
						</a>
					</div>
					<div className='contact-info-row'>
						<AiFillGithub className='contact-icon' />
						<a href='https://github.com/andy-cameron' target='_blank'>
							github.com/<b>andy-cameron</b>
						</a>
					</div>
					<div className='contact-info-row'>
						<FaMediumM className='contact-icon' />
						<a href='https://medium.com/@andycameron' target='_blank'>
							@<b>andy</b>cameron
						</a>
					</div>
				</Grid>
			</Grid>
			{/* <div className='image-container'>
				<div className='triangle-bottomleft'></div>
			</div> */}
		</div>
	);
};

export default Contact;
