import React from "react";
import type { Event } from "../../types/event";
import EventCard from "./EventCard";

interface EventGridProps {
	events: Event[];
	onBuyTicket: (eventId: string) => void;
}

const EventGrid: React.FC<EventGridProps> = ({ events, onBuyTicket }) => {
	if (events.length === 0) {
		return (
			<div className="text-center py-12">
				<div className="text-gray-500 text-lg">No events found</div>
				<p className="text-gray-400 mt-2">Check back later for new events!</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{events.map((event) => (
				<EventCard
					key={event.id}
					event={event}
					onBuyTicket={onBuyTicket}
				/>
			))}
		</div>
	);
};

export default EventGrid;
