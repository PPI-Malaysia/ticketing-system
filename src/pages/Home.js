import React from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Star, ArrowRight } from "lucide-react";
import EventCard from "../components/Events/EventCard";

const Home = () => {
	// Sample featured events data
	const featuredEvents = [
		{
			id: 1,
			name: "Coldplay - Jakarta",
			date: "2024-11-15",
			time: "20:00",
			venue: "Gelora Bung Karno Stadium",
			location: "Jakarta",
			category: "concert",
			startingPrice: 2975000,
			availableTickets: 150,
			image:
				"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
			type: "event",
		},
		{
			id: 2,
			name: "Ed Sheeran - Surabaya",
			date: "2024-12-02",
			time: "19:30",
			venue: "Gelora Bung Tomo Stadium",
			location: "Surabaya",
			category: "concert",
			startingPrice: 1250000,
			availableTickets: 75,
			image:
				"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
			type: "event",
		},
		{
			id: 3,
			name: "Java Jazz Festival",
			date: "2024-12-15",
			time: "18:00",
			venue: "Jakarta International Expo",
			location: "Jakarta",
			category: "festival",
			startingPrice: 850000,
			availableTickets: 200,
			image:
				"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
			type: "event",
		},
	];

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-secondary-600 to-secondary-800 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="py-20 text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Your Gateway to Amazing Events
						</h1>
						<p className="text-xl md:text-2xl mb-8 text-purple-100">
							Discover concerts, festivals, and experiences across Indonesia
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								to="/events"
								className="inline-flex items-center px-8 py-3 bg-white text-secondary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
							>
								Browse Events
								<ArrowRight className="w-5 h-5 ml-2" />
							</Link>
							<Link
								to="/about"
								className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-secondary-600 transition-colors"
							>
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Events */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Featured Events
						</h2>
						<p className="text-xl text-gray-600">
							Don't miss out on these amazing upcoming events
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
						{featuredEvents.map((event) => (
							<EventCard
								key={event.id}
								event={event}
							/>
						))}
					</div>

					<div className="text-center">
						<Link
							to="/events"
							className="inline-flex items-center px-6 py-3 bg-secondary-600 text-white font-semibold rounded-lg hover:bg-secondary-700 transition-colors"
						>
							View All Events
							<ArrowRight className="w-5 h-5 ml-2" />
						</Link>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Why Choose TicketDeal?
						</h2>
						<p className="text-xl text-gray-600">
							We make event booking simple and secure
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center p-6">
							<div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<Star className="w-8 h-8 text-secondary-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Trusted Platform
							</h3>
							<p className="text-gray-600">
								Secure transactions and authentic tickets guaranteed
							</p>
						</div>

						<div className="text-center p-6">
							<div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<Calendar className="w-8 h-8 text-secondary-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Easy Booking
							</h3>
							<p className="text-gray-600">
								Book tickets in just a few clicks with our user-friendly
								interface
							</p>
						</div>

						<div className="text-center p-6">
							<div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<MapPin className="w-8 h-8 text-secondary-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Local Events
							</h3>
							<p className="text-gray-600">
								Discover amazing events happening in your city
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-16 bg-secondary-600 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Ready to Experience Something Amazing?
					</h2>
					<p className="text-xl mb-8 text-purple-100">
						Join thousands of event-goers who trust TicketDeal
					</p>
					<Link
						to="/events"
						className="inline-flex items-center px-8 py-3 bg-white text-secondary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
					>
						Start Exploring
						<ArrowRight className="w-5 h-5 ml-2" />
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Home;
