import React from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Clock } from "lucide-react";

const EventCard = ({ event }) => {
	const formatPrice = (price) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(price);
	};

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("id-ID", {
			day: "numeric",
			month: "short",
			year: "numeric",
		});
	};

	const formatTime = (timeString) => {
		const time = new Date(`2024-01-01T${timeString}`);
		return time.toLocaleTimeString("id-ID", {
			hour: "2-digit",
			minute: "2-digit",
			hour12: false,
		});
	};

	return (
		<div className="bg-white rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300 overflow-hidden">
			<Link to={`/events/${event.id}`}>
				<div className="relative">
					<img
						src={event.image}
						alt={event.name}
						className="w-full h-48 object-cover"
					/>
					<div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
						{event.category}
					</div>
				</div>

				<div className="p-4">
					<h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
						{event.name}
					</h3>

					<div className="space-y-2 mb-4">
						<div className="flex items-center text-sm text-gray-600">
							<Calendar className="w-4 h-4 mr-2" />
							<span>{formatDate(event.date)}</span>
							<Clock className="w-4 h-4 ml-4 mr-2" />
							<span>{formatTime(event.time)}</span>
						</div>

						<div className="flex items-center text-sm text-gray-600">
							<MapPin className="w-4 h-4 mr-2" />
							<span className="line-clamp-1">{event.venue}</span>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Starting from</p>
							<p className="font-bold text-lg text-secondary-600">
								{formatPrice(event.startingPrice)}
							</p>
						</div>

						<div className="flex items-center space-x-2">
							{event.availableTickets > 0 ? (
								<span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">
									{event.availableTickets} left
								</span>
							) : (
								<span className="text-sm text-red-600 bg-red-50 px-2 py-1 rounded">
									Sold Out
								</span>
							)}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default EventCard;
