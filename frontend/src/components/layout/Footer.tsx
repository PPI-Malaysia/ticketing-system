import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-50 border-t border-gray-200 mt-auto">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-lg font-semibold text-gray-900 mb-4">
							TicketHub
						</h3>
						<p className="text-gray-600 text-sm">
							Your trusted platform for secure ticket purchases.
						</p>
					</div>
					<div>
						<h4 className="text-sm font-semibold text-gray-900 mb-4">
							Support
						</h4>
						<ul className="space-y-2 text-sm text-gray-600">
							<li>
								<a
									href="#"
									className="hover:text-gray-900"
								>
									Help Center
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-gray-900"
								>
									Contact Us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-gray-900"
								>
									Refund Policy
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
						<ul className="space-y-2 text-sm text-gray-600">
							<li>
								<a
									href="#"
									className="hover:text-gray-900"
								>
									Terms of Service
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-gray-900"
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-gray-900"
								>
									Cookie Policy
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-sm font-semibold text-gray-900 mb-4">
							Company
						</h4>
						<ul className="space-y-2 text-sm text-gray-600">
							<li>
								<a
									href="#"
									className="hover:text-gray-900"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-gray-900"
								>
									Careers
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-gray-900"
								>
									Press
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-8 pt-8 border-t border-gray-200">
					<p className="text-center text-sm text-gray-600">
						© 2024 TicketHub. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
