export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  imageUrl: string;
  price: number;
  availableTickets: number;
  totalTickets: number;
  category: string;
  organizer: string;
}

export interface Ticket {
  id: string;
  eventId: string;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  seatNumber?: string;
  price: number;
  purchaseDate: string;
  status: 'active' | 'used' | 'cancelled';
  qrCode?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  tickets: Ticket[];
} 