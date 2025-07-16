import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
	const [email, setEmail] = useState("");

	const handleSubscribe = (e) => {
		e.preventDefault();
		if (email.trim()) {
			// Handle newsletter subscription
			console.log("Subscribe:", email);
			setEmail("");
		}
	};

	const footerLinks = {
		connect: [
			{ name: "Contact Us", href: "/contact" },
			{ name: "Twitter", href: "#" },
			{ name: "Facebook", href: "#" },
			{ name: "Instagram", href: "#" },
		],
		resources: [
			{ name: "About Us", href: "/about" },
			{ name: "Help Center", href: "/help" },
			{ name: "Sell on TicketDeal", href: "/sell" },
			{ name: "Buyer Guarantee", href: "/guarantee" },
		],
	};

	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Main Footer Content */}
				<div className="py-12">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{/* Newsletter Section */}
						<div className="md:col-span-2">
							<h3 className="text-lg font-semibold mb-4">Stay Up to Date</h3>
							<p className="text-gray-300 mb-4">
								Be the first to know about the latest events and special offers
							</p>
							<form
								onSubmit={handleSubscribe}
								className="flex"
							>
								<div className="flex-1 relative">
									<input
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="Email address"
										className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-white placeholder-gray-400"
										required
									/>
								</div>
								<button
									type="submit"
									className="px-4 py-2 bg-secondary-600 hover:bg-secondary-700 rounded-r-lg transition-colors"
								>
									<ArrowRight className="w-5 h-5" />
								</button>
							</form>
						</div>

						{/* Connect Section */}
						<div>
							<h3 className="text-lg font-semibold mb-4">Connect</h3>
							<ul className="space-y-2">
								{footerLinks.connect.map((link) => (
									<li key={link.name}>
										<Link
											to={link.href}
											className="text-gray-300 hover:text-white transition-colors"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Resources Section */}
						<div>
							<h3 className="text-lg font-semibold mb-4">Resources</h3>
							<ul className="space-y-2">
								{footerLinks.resources.map((link) => (
									<li key={link.name}>
										<Link
											to={link.href}
											className="text-gray-300 hover:text-white transition-colors"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				{/* Payment Methods */}
				<div className="py-6 border-t border-gray-800">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex items-center space-x-4 mb-4 md:mb-0">
							<span className="text-gray-300">Supporting Payment:</span>
							<div className="flex items-center space-x-2">
								<div className="w-10 h-6 bg-red-600 rounded flex items-center justify-center">
									<span className="text-white text-xs font-bold">MC</span>
								</div>
								<div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
									<span className="text-white text-xs font-bold">V</span>
								</div>
							</div>
						</div>

						<div className="flex space-x-4">
							<a
								href="#"
								className="text-gray-300 hover:text-white transition-colors"
							>
								<Facebook className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="text-gray-300 hover:text-white transition-colors"
							>
								<Twitter className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="text-gray-300 hover:text-white transition-colors"
							>
								<Instagram className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="py-6 border-t border-gray-800">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex items-center space-x-2 mb-4 md:mb-0">
							<div className="w-6 h-6 bg-gradient-to-r from-secondary-600 to-secondary-400 rounded flex items-center justify-center">
								<span className="text-white font-bold text-xs">T</span>
							</div>
							<span className="text-gray-300">
								© 2024 PT.Pasar Tiket Sejahtera. All Rights Reserved.
							</span>
						</div>

						<div className="flex space-x-6">
							<Link
								to="/privacy"
								className="text-gray-300 hover:text-white transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								to="/terms"
								className="text-gray-300 hover:text-white transition-colors"
							>
								Terms & Conditions
							</Link>
							<Link
								to="/cookies"
								className="text-gray-300 hover:text-white transition-colors"
							>
								Cookie Policy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
