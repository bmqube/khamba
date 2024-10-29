import React, {useState, useEffect} from 'react';
import {render, Text} from 'ink';

const dashSlash = ['-', '\\', '|', '/'];
const dotsRound = ['⢎⡰', '⢎⡡', '⢎⡑', '⢎⠱', '⠎⡱', '⢊⡱', '⢌⡱', '⢆⡱'];
const dots = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
const dotsMore = ['⣷', '⣯', '⣟', '⡿', '⢿', '⣻', '⣽', '⣾'];
const dotsMoreReverse = ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷'];
const upDownBar = ['▁', '▃', '▄', '▅', '▆', '▇', '█', '▇', '▆', '▅', '▄', '▃'];
const upDownDot = ['⠁', '⠂', '⠄', '⡀', '⢀', '⠠', '⠐', '⠈'];
const boxInBox = ['◰', '◳', '◲', '◱'];
const leftRightBar = [
	'▉',
	'▊',
	'▋',
	'▌',
	'▍',
	'▎',
	'▏',
	'▎',
	'▍',
	'▌',
	'▋',
	'▊',
	'▉',
];
const fish = ['𓆝 ', '𓆟', '𓆞', '𓆝', '𓆟'];
const eye = ['◡◡', '⊙⊙', '◠◠'];
export const spinners = {
	dashSlash,
	dotsRound,
	dots,
	dotsMore,
	dotsMoreReverse,
	upDownBar,
	upDownDot,
	boxInBox,
	leftRightBar,
	eye,
	fish,
};

type TProps = {
	frames: string[];
	color?: string;
	speed?: number;
};
export const Spinner = ({frames, color = 'yellow', speed = 50}: TProps) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setIndex(currentIndex => (currentIndex + 1) % frames.length);
		}, speed);

		return () => clearInterval(timer);
	}, []);

	return <Text color={color}>{frames[index]}</Text>;
};
