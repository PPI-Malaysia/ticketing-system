import React, { useState, useEffect } from "react";
import { Filter, Search, Calendar, MapPin } from "lucide-react";
import EventCard from "./EventCard";

const EventGrid = ({ events, loading = false }) => {
	const [filteredEvents, setFilteredEvents] = useState(events);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [selectedLocation, setSelectedLocation] = useState("all");
	const [sortBy, setSortBy] = useState("date");
	const [showFilters, setShowFilters] = useState(false);

	const categories = [
		"all",
		"concert",
		"festival",
		"sports",
		"theater",
		"exhibition",
	];
	const locations = [
		"all",
		"Jakarta",
		"Surabaya",
		"Bandung",
		"Yogyakarta",
		"Medan",
	];

	useEffect(() => {
		let filtered = events;

		// Filter by search term
		if (searchTerm) {
			filtered = filtered.filter(
				(event) =>
					event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					event.venue.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}

		// Filter by category
		if (selectedCategory !== "all") {
			filtered = filtered.filter(
				(event) => event.category === selectedCategory
			);
		}

		// Filter by location
		if (selectedLocation !== "all") {
			filtered = filtered.filter(
				(event) => event.location === selectedLocation
			);
		}

		// Sort events
		filtered.sort((a, b) => {
			switch (sortBy) {
				case "date":
					return new Date(a.date) - new Date(b.date);
				case "price":
					return a.startingPrice - b.startingPrice;
				case "name":
					return a.name.localeCompare(b.name);
				default:
					return 0;
			}
		});

		setFilteredEvents(filtered);
	}, [events, searchTerm, selectedCategory, selectedLocation, sortBy]);

	if (loading) {
		return (
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{[...Array(6)].map((_, i) => (
					<div
						key={i}
						className="bg-white rounded-lg shadow-soft overflow-hidden animate-pulse"
					>
						<div className="h-48 bg-gray-200"></div>
						<div className="p-4">
							<div className="h-6 bg-gray-200 rounded mb-2"></div>
							<div className="h-4 bg-gray-200 rounded mb-2"></div>
							<div className="h-4 bg-gray-200 rounded mb-4"></div>
							<div className="flex justify-between">
								<div className="h-6 bg-gray-200 rounded w-24"></div>
								<div className="h-6 bg-gray-200 rounded w-16"></div>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	}

	return (
		<div className="space-y-6">
			{/* Search and Filter Bar */}
			<div className="bg-white rounded-lg shadow-soft p-4">
				<div className="flex flex-col lg:flex-row gap-4">
					{/* Search */}
					<div className="flex-1 relative">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
						<input
							type="text"
							placeholder="Search events..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
						/>
					</div>

					{/* Filter Toggle */}
					<button
						onClick={() => setShowFilters(!showFilters)}
						className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
					>
						<Filter className="w-5 h-5" />
						<span>Filters</span>
					</button>
				</div>

				{/* Filter Options */}
				{showFilters && (
					<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-gray-200">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Category
							</label>
							<select
								value={selectedCategory}
								onChange={(e) => setSelectedCategory(e.target.value)}
								className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
							>
								{categories.map((category) => (
									<option
										key={category}
										value={category}
									>
										{category === "all"
											? "All Categories"
											: category.charAt(0).toUpperCase() + category.slice(1)}
									</option>
								))}
							</select>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Location
							</label>
							<select
								value={selectedLocation}
								onChange={(e) => setSelectedLocation(e.target.value)}
								className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
							>
								{locations.map((location) => (
									<option
										key={location}
										value={location}
									>
										{location === "all" ? "All Locations" : location}
									</option>
								))}
							</select>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Sort By
							</label>
							<select
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
								className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
							>
								<option value="date">Date</option>
								<option value="price">Price</option>
								<option value="name">Name</option>
							</select>
						</div>

						<div className="flex items-end">
							<button
								onClick={() => {
									setSearchTerm("");
									setSelectedCategory("all");
									setSelectedLocation("all");
									setSortBy("date");
								}}
								className="w-full px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
							>
								Clear Filters
							</button>
						</div>
					</div>
				)}
			</div>

			{/* Results Info */}
			<div className="flex justify-between items-center">
				<p className="text-gray-600">
					Showing {filteredEvents.length} of {events.length} events
				</p>
			</div>

			{/* Events Grid */}
			{filteredEvents.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredEvents.map((event) => (
						<EventCard
							key={event.id}
							event={event}
						/>
					))}
				</div>
			) : (
				<div className="text-center py-12">
					<div className="text-gray-400 mb-4">
						<Calendar className="w-16 h-16 mx-auto" />
					</div>
					<h3 className="text-lg font-medium text-gray-900 mb-2">
						No events found
					</h3>
					<p className="text-gray-500 mb-4">
						Try adjusting your search or filter criteria
					</p>
					<button
						onClick={() => {
							setSearchTerm("");
							setSelectedCategory("all");
							setSelectedLocation("all");
							setSortBy("date");
						}}
						className="btn btn-primary"
					>
						Clear All Filters
					</button>
				</div>
			)}
		</div>
	);
};

export default EventGrid;
