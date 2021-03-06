import './Typewriter.css';
import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, startingText }) => {
	const [isDeleting, setIsDeleting] = useState(true);
	const [text, setText] = useState(texts[0]);
	const [delta, setDelta] = useState(0);
	const [isTicking, setIsTicking] = useState(false);
	const [textIndex, setTextIndex] = useState(0);
	const [start, setStart] = useState(false);
	const timeBeforeStarting = 2500;
	const deletingSpeed = 90;
	const timeBeforeDeleting = 1000;
	const timeBeforeWriting = 180;

	function tick() {
		const fullText = texts[textIndex];
		if (isDeleting) {
			setText(fullText.substring(0, text.length - 1));
			setDelta(deletingSpeed);
		} else {
			setText(fullText.substring(0, text.length + 1));
		}

		if (!isDeleting && text === fullText) {
			setDelta(timeBeforeDeleting);
			setIsDeleting(true);
		} else if (isDeleting && text === '') {
			setIsDeleting(false);
			setDelta(timeBeforeWriting);
			setTextIndex((textIndex + 1) % texts.length);
		}
		setIsTicking(false);
	}

	useEffect(() => {
		if (!start) {
			setStart(true);
			setDelta(timeBeforeStarting);
		} else if (!isTicking) {
			setIsTicking(true);
			setTimeout(tick, delta);
		}
	}, [isTicking, start]);

	return (
		<span className='typewriter'>
			<span className='im-text'>{startingText}</span>
			{text}
			<span className='cursor blink'>|</span>
		</span>
	);
};

export default Typewriter;
