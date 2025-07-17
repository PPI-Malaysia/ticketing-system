import React from "react";

const Header: React.FC = () => {
	return (
		<header className="bg-white shadow-sm border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<h1 className="text-2xl font-bold text-gray-900">TicketHub</h1>
					</div>
					<nav className="hidden md:flex space-x-8">
						<a
							href="#"
							className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
						>
							Events
						</a>
						<a
							href="#"
							className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
						>
							My Tickets
						</a>
						<a
							href="#"
							className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
						>
							Help
						</a>
					</nav>
					<div className="flex items-center space-x-4">
						<button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
							Sign In
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
