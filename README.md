## To Login Dashboard

- **Email**: test@gmail.com
- **Passwordr**: ABQ123456a789

A sleek and responsive **User Management Dashboard** built with React, offering both dark and light themes, real-time alerts, user authentication, and seamless API integration.

## Repository Description

A modern React dashboard for managing users, showcasing state management, routing, theming, authentication, and API integration using Clerk, Reqres, Material-UI, and custom fonts.

## Features

- **Authentication** using **Clerk**: only registered users can access the app. Admin users have full access and control over all user data.
- **User Management** dashboard for viewing, adding, editing, and deleting user information.
- **State Management** using `useState`, `useContext`, and `useCallback` for efficient data handling.
- **Routing** powered by `useRouter` for smooth navigation between views.
- **Theming** with customizable **Dark** and **Light** modes.
- **UI Components** from Material-UI for a consistent and accessible interface.
- **API Integration** via Reqres for user data and other RESTful endpoints.
- **Notifications** using Toaster for in-app alerts and feedback.
- **Custom Font** installed and applied across the application for a unique look.

## Tech Stack

- **React** (v18+)
- **React Router**
- **Material-UI**
- **Reqres API**
- **Clerk** (Authentication)
- **React Hot Toast** (Toaster)
- **Custom Font** (installed via CSS)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-dashboard.git
   cd react-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

Run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```
react-dashboard/
├── public/                # Public assets and index.html
├── src/
│   ├── components/        # Reusable UI components
│   ├── context/           # React Context providers
│   ├── hooks/             # Custom hooks
│   ├── pages/             # Page components and layouts
│   ├── theme/             # Theme definitions (dark & light)
│   ├── App.js             # App entry point
│   └── index.js           # React DOM rendering
└── README.md              # Project documentation
```

## Theming

Themes are defined in `src/theme/`. Switch between dark and light modes using the theme toggle in the header.

## Alerts & Notifications

In-app alerts are powered by `react-hot-toast` Toaster. Customize messages and positions in `src/components/ToastProvider.js`.

## Authentication

Authentication is managed using **Clerk**. Users must sign up or log in to access the app. Admin users have extended privileges to view and manage all user data.

## API Integration

User data is fetched from the [Reqres API](https://reqres.in/) using the Fetch API and handled with `useCallback` and `useEffect`.

## License

This project is licensed under the MIT License.
" >> README.md
