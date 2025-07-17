# TicketHub - Internal Ticket Marketplace

A modern, user-friendly ticket marketplace built with React, TypeScript, and Tailwind CSS. Designed for fast and efficient ticket purchasing with a clean, intuitive interface.

## 🚀 Features

- **Fast Ticket Purchase**: Streamlined UI for quick ticket buying
- **Event Discovery**: Browse events by category and search functionality
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, professional interface using Tailwind CSS
- **Type Safety**: Full TypeScript support for better development experience

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── layout/          # Layout components (Header, Footer, Layout)
│   ├── ui/              # Base UI components (Button, Card)
│   └── events/          # Event-specific components
├── pages/               # Page components
├── types/               # TypeScript type definitions
├── data/                # Mock data and constants
├── hooks/               # Custom React hooks (future)
├── services/            # API services (future)
├── utils/               # Utility functions (future)
└── styles/              # Global styles (future)
```

## 🛠️ Technology Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design System

### Components

The project follows a component-based architecture with:

- **Layout Components**: Header, Footer, Layout wrapper
- **UI Components**: Reusable base components (Button, Card)
- **Feature Components**: Event-specific components (EventCard, EventGrid, EventSearch)

### Styling

- **Tailwind CSS v4**: Modern utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Consistent Spacing**: Using Tailwind's spacing scale
- **Color Palette**: Professional blue/purple gradient theme

## 📱 User Experience

### Key UX Principles

1. **Speed**: Minimize clicks to purchase tickets
2. **Clarity**: Clear event information and pricing
3. **Accessibility**: Semantic HTML and keyboard navigation
4. **Mobile-First**: Optimized for mobile devices
5. **Visual Hierarchy**: Clear information architecture

### User Flow

1. **Landing**: Hero section with clear call-to-action
2. **Browse**: Search and filter events
3. **Select**: View event details and pricing
4. **Purchase**: Quick ticket buying process
5. **Confirmation**: Clear purchase confirmation

## 🔧 Development Guidelines

### Code Organization

- **Feature-based**: Components organized by feature
- **Type Safety**: Full TypeScript implementation
- **Props Interface**: All components have proper TypeScript interfaces
- **Consistent Naming**: PascalCase for components, camelCase for functions

### Best Practices

- **Component Composition**: Build complex UIs from simple components
- **Props Drilling**: Minimize prop drilling with proper state management
- **Performance**: Use React.memo and useMemo where appropriate
- **Accessibility**: Semantic HTML and ARIA labels
- **Responsive**: Mobile-first responsive design

### File Naming Conventions

- Components: `PascalCase.tsx` (e.g., `EventCard.tsx`)
- Types: `camelCase.ts` (e.g., `event.ts`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)

## 🚧 Future Enhancements

### Planned Features

- [ ] User authentication and profiles
- [ ] Shopping cart functionality
- [ ] Payment integration
- [ ] Ticket management dashboard
- [ ] Event creation for organizers
- [ ] Real-time availability updates
- [ ] Email notifications
- [ ] QR code generation for tickets

### Technical Improvements

- [ ] State management (Redux Toolkit or Zustand)
- [ ] API integration with backend
- [ ] Unit and integration tests
- [ ] Performance optimization
- [ ] PWA capabilities
- [ ] Internationalization (i18n)

## 🤝 Contributing

1. Follow the established folder structure
2. Use TypeScript for all new components
3. Follow the existing naming conventions
4. Ensure responsive design for all components
5. Add proper TypeScript interfaces
6. Test on multiple screen sizes

## 📄 License

This project is for internal use only.

---

**Built with ❤️ for efficient ticket purchasing**
