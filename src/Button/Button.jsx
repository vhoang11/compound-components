import React, { Children } from 'react';

const Button = ({ children, className, size, ...rest }) => {
	
	let sizeClass;
	if(size === "sm") sizeClass = 'button-small'
	if(size === "lg") sizeClass = 'button-large'
	
	return (
		<button {...rest} className={`${sizeClass} ${className}`}>
			{children}
		</button>
	)
}

export default Button;
