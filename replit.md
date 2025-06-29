# Lakshmi Online Center - Digital Services Platform

## Overview

This is a React-based single-page application for Lakshmi Online Center, a digital services business that provides various government document processing and online services. The application features a modern, responsive design built with React, TypeScript, and Tailwind CSS, with a Node.js/Express backend for handling contact form submissions and data storage.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **UI Components**: Comprehensive set of accessible components using Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage**: Currently using in-memory storage (MemStorage) with interface for easy database integration
- **API**: RESTful endpoints for contact form submission and data retrieval

### Design System
- **Component Library**: shadcn/ui with "new-york" style
- **Color Scheme**: Custom brand colors including primary pink, accent gold, and trust blue
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Built-in accessibility features through Radix UI components

## Key Components

### Frontend Components
1. **Layout Components**
   - `NavigationHeader`: Sticky navigation with smooth scrolling
   - `HeroSection`: Landing section with call-to-action
   - `Footer`: Contact information and links

2. **Content Sections**
   - `AboutSection`: Business information and features
   - `ServicesSection`: Service offerings grid
   - `TestimonialsSection`: Customer testimonials
   - `ContactSection`: Contact form with validation

3. **UI Components**
   - Comprehensive shadcn/ui component library
   - Custom styled components with brand colors
   - Toast notifications for user feedback

### Backend Components
1. **Storage Layer**
   - `IStorage` interface for data operations
   - `MemStorage` implementation for development
   - Ready for PostgreSQL integration with Drizzle ORM

2. **API Routes**
   - Contact form submission with validation
   - Contact messages retrieval for admin use
   - Error handling with proper HTTP status codes

## Data Flow

1. **Contact Form Submission**
   - User fills out contact form in `ContactSection`
   - Form data validated using Zod schemas
   - TanStack Query mutation sends data to `/api/contact`
   - Backend validates and stores contact message
   - Success/error feedback shown via toast notifications

2. **Page Navigation**
   - Single-page application with smooth scrolling between sections
   - Wouter handles routing for potential future pages
   - Navigation state managed through React hooks

3. **UI State Management**
   - TanStack Query manages server state and caching
   - Local component state for form inputs and UI interactions
   - Toast system for user notifications

## External Dependencies

### Production Dependencies
- **UI Framework**: React ecosystem (React, React DOM)
- **Database**: Neon serverless PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with PostCSS
- **Component Library**: Radix UI primitives and shadcn/ui
- **Forms**: React Hook Form with Zod validation
- **HTTP Client**: Native fetch API with TanStack Query
- **Date Handling**: date-fns library

### Development Dependencies
- **Build Tools**: Vite with TypeScript support
- **Bundling**: esbuild for server-side bundling
- **Database Migrations**: Drizzle Kit for schema management
- **Development Server**: Express with Vite middleware integration

### External Services
- **Database**: Neon PostgreSQL (configured via DATABASE_URL)
- **Communication**: WhatsApp integration for customer contact
- **Maps**: Google Maps integration for location display

## Deployment Strategy

### Development Environment
- Vite dev server with HMR for frontend development
- Express server with TypeScript execution via tsx
- In-memory storage for rapid development iteration
- Replit-specific optimizations and error handling

### Production Build
- Vite builds optimized frontend bundle to `dist/public`
- esbuild creates server bundle in `dist` directory
- Environment-based configuration for database connections
- Static file serving through Express in production

### Database Setup
- Drizzle configuration pointing to PostgreSQL
- Schema defined in `shared/schema.ts` for type safety
- Migration system ready with `drizzle-kit push` command
- Environment variable `DATABASE_URL` required for database connection

### Scaling Considerations
- Modular storage interface allows easy database provider switching
- Separate frontend/backend builds enable independent deployment
- API design supports future feature expansion
- Component architecture supports feature additions

## Changelog
- June 29, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.