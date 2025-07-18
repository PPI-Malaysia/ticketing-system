import React from "react";
import type { Event } from "../../types/event";
import Card from "../ui/Card";
import Button from "../ui/Button";

interface EventCardProps {
	event: Event;
	onBuyTicket: (eventId: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onBuyTicket }) => {
	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("en-US", {
			weekday: "short",
			month: "short",
			day: "numeric",
		});
	};

	const formatPrice = (price: number) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
		}).format(price);
	};

	return (
		<Card className="h-full">
			<div className="aspect-w-16 aspect-h-9">
				<img
					src={event.imageUrl}
					alt={event.title}
					className="w-full h-48 object-cover"
				/>
			</div>
			<div className="p-4">
				<div className="flex justify-between items-start mb-2">
					<h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
						{event.title}
					</h3>
					<span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
						{event.category}
					</span>
				</div>

				<div className="space-y-2 mb-4">
					<div className="flex items-center text-sm text-gray-600">
						<svg
							className="w-4 h-4 mr-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						{formatDate(event.date)} at {event.time}
					</div>
					<div className="flex items-center text-sm text-gray-600">
						<svg
							className="w-4 h-4 mr-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
						{event.venue}, {event.location}
					</div>
					<div className="flex items-center text-sm text-gray-600">
						<svg
							className="w-4 h-4 mr-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						{event.availableTickets} tickets left
					</div>
				</div>

				<div className="flex justify-between items-center">
					<div className="text-2xl font-bold text-gray-900">
						{formatPrice(event.price)}
					</div>
					<Button
						onClick={() => onBuyTicket(event.id)}
						disabled={event.availableTickets === 0}
						size="sm"
					>
						{event.availableTickets === 0 ? "Sold Out" : "Buy Ticket"}
					</Button>
				</div>
			</div>
		</Card>
	);
};

export default EventCard;
