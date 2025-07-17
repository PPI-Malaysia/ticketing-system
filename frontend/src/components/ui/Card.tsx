import React from "react";

interface CardProps {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = "", onClick }) => {
	const baseClasses =
		"bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden";
	const interactiveClasses = onClick
		? "cursor-pointer hover:shadow-md transition-shadow"
		: "";

	return (
		<div
			className={`${baseClasses} ${interactiveClasses} ${className}`}
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export default Card;
