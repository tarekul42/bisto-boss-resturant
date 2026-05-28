# Bisto Boss Restaurant

A restaurant SPA built with React and Firebase, featuring menu browsing, cart management, order placement, and a dashboard for admin operations.

## Features

- **Public pages**: Home, Menu, Order by category, Login, Signup
- **Cart management**: Add/remove items with email-scoped cart queries
- **Firebase authentication**: Email/password and Google sign-in
- **React Query**: Server state caching for menu and cart data
- **Custom hooks**: Reusable data fetching (useCart, useMenu)
- **Dual layouts**: Main layout for public pages, Dashboard layout for admin
- **Protected routes**: PrivateRoute component for authenticated pages
- **Rich UI**: Swiper carousel, parallax effects, tabs, star ratings, captcha

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite 5 |
| Routing | React Router DOM 6 |
| State | TanStack React Query 5 |
| Auth | Firebase 10 |
| Styling | Tailwind CSS 3 + DaisyUI 4 |
| Forms | React Hook Form 7 |
| UI | Swiper, React Parallax, React Tabs, SweetAlert2 |

## Getting Started

```bash
npm install
npm run dev
```

Create a `.env` file with your Firebase config:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Project Structure

```
src/
├── Components/       # Reusable UI components
├── Firebase/         # Firebase configuration
├── Hooks/            # Custom hooks (useCart, useMenu)
├── Layout/           # Main layout + Dashboard layout
├── Pages/            # Route pages (Home, Menu, Order, Login, Dashboard)
├── Providers/        # AuthProvider context
├── Routes/           # Route definitions
└── assets/           # Static assets
```

## API

Connects to the [bisto-boss-res-server](https://github.com/tarekul42/bisto-boss-res-server) backend.
