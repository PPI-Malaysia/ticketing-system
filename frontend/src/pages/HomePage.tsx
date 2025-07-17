import React, { useState, useMemo } from "react";
import EventSearch from "../components/events/EventSearch";
import EventGrid from "../components/events/EventGrid";
import { mockEvents } from "../data/mockEvents";
import type { Event } from "../types/event";

const HomePage: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");

	// Get unique categories from events
	const categories = useMemo(() => {
		const uniqueCategories = [
			...new Set(mockEvents.map((event) => event.category)),
		];
		return uniqueCategories.sort();
	}, []);

	// Filter events based on search query and category
	const filteredEvents = useMemo(() => {
		return mockEvents.filter((event) => {
			const matchesSearch =
				searchQuery === "" ||
				event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
				event.organizer.toLowerCase().includes(searchQuery.toLowerCase());

			const matchesCategory =
				selectedCategory === "all" || event.category === selectedCategory;

			return matchesSearch && matchesCategory;
		});
	}, [searchQuery, selectedCategory]);

	const handleBuyTicket = (eventId: string) => {
		// TODO: Implement ticket purchase flow
		console.log("Buying ticket for event:", eventId);
		alert("Ticket purchase functionality coming soon!");
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<div className="text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Find Your Perfect Event
						</h1>
						<p className="text-xl md:text-2xl mb-8 text-blue-100">
							Discover and book tickets for amazing events happening near you
						</p>
						<div className="flex justify-center">
							<button
								onClick={() =>
									document
										.getElementById("events-section")
										?.scrollIntoView({ behavior: "smooth" })
								}
								className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
							>
								Browse Events
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Events Section */}
			<div
				id="events-section"
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
			>
				<div className="mb-8">
					<h2 className="text-3xl font-bold text-gray-900 mb-2">
						Upcoming Events
					</h2>
					<p className="text-gray-600">Find events that match your interests</p>
				</div>

				<EventSearch
					onSearch={setSearchQuery}
					onFilterChange={setSelectedCategory}
					categories={categories}
				/>

				<EventGrid
					events={filteredEvents}
					onBuyTicket={handleBuyTicket}
				/>
			</div>
		</div>
	);
};

export default HomePage;
