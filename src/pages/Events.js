import React, { useState, useEffect } from "react";
import EventGrid from "../components/Events/EventGrid";

const Events = () => {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(true);

	// Sample events data - in real app, this would come from API
	const sampleEvents = [
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
		{
			id: 4,
			name: "Dewa 19 Reunion Concert",
			date: "2024-11-28",
			time: "19:00",
			venue: "ICE BSD",
			location: "Jakarta",
			category: "concert",
			startingPrice: 750000,
			availableTickets: 300,
			image:
				"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
			type: "event",
		},
		{
			id: 5,
			name: "Soundrenaline 2024",
			date: "2024-12-20",
			time: "16:00",
			venue: "Garuda Wisnu Kencana",
			location: "Bali",
			category: "festival",
			startingPrice: 1150000,
			availableTickets: 500,
			image:
				"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
			type: "event",
		},
		{
			id: 6,
			name: "We The Fest",
			date: "2024-12-08",
			time: "14:00",
			venue: "GBK Sports Complex",
			location: "Jakarta",
			category: "festival",
			startingPrice: 950000,
			availableTickets: 0,
			image:
				"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
			type: "event",
		},
	];

	useEffect(() => {
		// Simulate API call
		const fetchEvents = async () => {
			setLoading(true);
			// Simulate loading delay
			setTimeout(() => {
				setEvents(sampleEvents);
				setLoading(false);
			}, 1000);
		};

		fetchEvents();
	}, []);

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="mb-8">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						All Events
					</h1>
					<p className="text-xl text-gray-600">
						Discover amazing events happening across Indonesia
					</p>
				</div>

				<EventGrid
					events={events}
					loading={loading}
				/>
			</div>
		</div>
	);
};

export default Events;
