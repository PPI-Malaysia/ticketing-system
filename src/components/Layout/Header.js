import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useCart } from "../../context/CartContext";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const navigate = useNavigate();
	const { getItemCount } = useCart();

	const handleSearch = (e) => {
		e.preventDefault();
		if (searchQuery.trim()) {
			navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
		}
	};

	const navigation = [
		{ name: "Events", href: "/events" },
		{ name: "Merchandise", href: "/merchandise" },
		{ name: "About", href: "/about" },
	];

	return (
		<header className="bg-white shadow-sm sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link
						to="/"
						className="flex items-center space-x-2"
					>
						<div className="w-8 h-8 bg-gradient-to-r from-secondary-600 to-secondary-400 rounded-lg flex items-center justify-center">
							<span className="text-white font-bold text-sm">T</span>
						</div>
						<span className="text-xl font-bold text-gray-900">TicketDeal</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex space-x-8">
						{navigation.map((item) => (
							<Link
								key={item.name}
								to={item.href}
								className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
							>
								{item.name}
							</Link>
						))}
					</nav>

					{/* Search Bar */}
					<form
						onSubmit={handleSearch}
						className="hidden md:block flex-1 max-w-lg mx-8"
					>
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
							<input
								type="text"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								placeholder="Search events, concerts, shows..."
								className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
							/>
						</div>
					</form>

					{/* Right Side Actions */}
					<div className="flex items-center space-x-4">
						{/* Cart */}
						<Link
							to="/cart"
							className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
						>
							<ShoppingCart className="w-6 h-6" />
							{getItemCount() > 0 && (
								<span className="absolute -top-1 -right-1 bg-secondary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
									{getItemCount()}
								</span>
							)}
						</Link>

						{/* User Menu */}
						<div className="relative">
							<Link
								to="/account"
								className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
							>
								<User className="w-6 h-6" />
								<span className="hidden sm:block text-sm font-medium">
									Account
								</span>
							</Link>
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
						>
							{isMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden py-4 border-t border-gray-200">
						<div className="space-y-2">
							{navigation.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
									onClick={() => setIsMenuOpen(false)}
								>
									{item.name}
								</Link>
							))}
						</div>

						{/* Mobile Search */}
						<form
							onSubmit={handleSearch}
							className="mt-4"
						>
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
								<input
									type="text"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									placeholder="Search events, concerts, shows..."
									className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
								/>
							</div>
						</form>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
