# Ticketing System

A comprehensive ticket sale system for internal organization events with React frontend and PHP backend.

## Features

- **Browse Events**: List view with filtering, search, and categories
- **Event Detail Pages**: Comprehensive event information with ticket selection
- **Shopping Cart**: Add, remove, and update ticket quantities
- **Checkout Process**: User information and payment method selection
- **Payment System**: Bank transfer and QR code payment options
- **Order Management**: Order history and status tracking
- **Responsive Design**: Mobile-friendly interface

## Tech Stack

### Frontend

- **React 18** - UI framework
- **Tailwind CSS** - Styling and responsive design
- **React Router DOM** - Client-side routing
- **Lucide React** - Icons
- **Axios** - HTTP client for API calls

### Backend

- **PHP** - Server-side logic
- **JSON** - Data format (can be easily replaced with database)
- **CORS** - Cross-origin resource sharing

## Project Structure

```
ticketing-system/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Layout/       # Header, Footer, Layout
│   │   │   └── Events/       # Event-related components
│   │   ├── pages/            # Page components
│   │   ├── context/          # React Context for state management
│   │   ├── utils/            # Utility functions
│   │   ├── services/         # API service calls
│   │   └── hooks/            # Custom React hooks
│   ├── public/               # Static assets
│   └── package.json          # Dependencies and scripts
├── backend/                  # PHP API
│   ├── api/                  # API endpoints
│   │   ├── events.php        # Events data
│   │   ├── featured-events.php
│   │   ├── orders.php
│   │   ├── create-order.php
│   │   └── payment.php
│   └── index.php             # Main PHP router
└── README.md
```

## Setup Instructions

### Frontend Setup

1. **Navigate to frontend directory**:

   ```bash
   cd frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start development server**:

   ```bash
   npm start
   ```

   The React app will start at `http://localhost:3000`

### Backend Setup

1. **Requirements**:

   - PHP 7.4 or higher
   - Web server (Apache/Nginx) or PHP built-in server

2. **Using PHP built-in server**:

   ```bash
   cd backend
   php -S localhost:8000
   ```

3. **Using XAMPP/WAMP/MAMP**:
   - Place the `backend` folder in your web server's document root
   - Access via `http://localhost/backend`

### API Endpoints

- `GET /api/events` - Get all events (with filtering support)
- `GET /api/events/featured` - Get featured events
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order
- `POST /api/payment` - Process payment

### Environment Configuration

Create a `.env` file in the frontend directory:

```env
REACT_APP_API_URL=http://localhost:8000
```

## Usage

### 1. Browse Events

- Visit the homepage to see featured events
- Go to `/events` to browse all available events
- Use filters to search by category, location, or event name

### 2. Event Details

- Click on any event card to view detailed information
- See different ticket types and pricing
- Add tickets to cart

### 3. Shopping Cart

- View selected tickets in the cart
- Update quantities or remove items
- Proceed to checkout

### 4. Checkout Process

- Enter customer information
- Select payment method (Bank Transfer or QR Code)
- Review order summary
- Complete purchase

### 5. Order Management

- View order history in account page
- Track order status (Active, Pending, Expired)
- Download digital tickets

## Payment Methods

### Bank Transfer

- Customers receive unique order ID
- Bank transfer details provided
- Manual verification process

### QR Code

- Generate QR code for payment
- Integration with local payment gateways
- Automatic payment confirmation

## Development Features

### Cart Management

- Global cart state using React Context
- Persistent cart across page refreshes
- Real-time cart updates

### Responsive Design

- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interface

### Error Handling

- Form validation
- API error handling
- User-friendly error messages

## Customization

### Styling

- Tailwind CSS configuration in `tailwind.config.js`
- Custom color schemes and components
- Responsive breakpoints

### API Integration

- Axios service layer for API calls
- Error handling and loading states
- Request/response interceptors

## Future Enhancements

- **Database Integration**: Replace JSON with MySQL/PostgreSQL
- **User Authentication**: Login/register functionality
- **Email Notifications**: Order confirmations and reminders
- **Admin Panel**: Event management and analytics
- **Push Notifications**: Real-time updates
- **Multi-language Support**: Indonesian and English
- **Advanced Analytics**: Sales reports and user behavior

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or issues, please contact the development team or create an issue in the repository.
