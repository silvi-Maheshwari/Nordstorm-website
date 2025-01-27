# Nordstrom Clone

This project is a clone of the Nordstrom website, built as part of a learning project to practice and demonstrate full-stack web development skills.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **State Management**: The application uses Redux Thunk middleware for asynchronous state management.
- **Routing**: React Router is implemented for navigation across different pages.
- **Interactive UI**: Chakra UI is utilized to create responsive and interactive user interfaces.
- **Deployment**: The frontend is deployed on Netlify, and the backend is deployed on Render.

## Technologies Used

### Frontend
- **React**: For building the user interface.
- **Redux Thunk**: For managing asynchronous state changes.
- **React Router**: For seamless navigation.
- **Chakra UI**: For responsive design and interactive components.

### Backend
- **Node.js**: Runtime environment.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: Database for storing user data and other resources.
- **Mongoose**: For schema-based modeling of MongoDB data.

### Deployment
- **Frontend**: Hosted on [Netlify]  (https://nordstrom-website1.netlify.app/)
- **Backend**: Hosted on Render with the base URL: 'https://full-stack-nordstrom-backend-project.onrender.com'

## Setup Instructions

### Prerequisites
- Node.js and npm installed.
- MongoDB database set up.

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd nordstrom-clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Setup environment variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   REACT_APP_BACKEND_URL=https://full-stack-nordstrom-backend-project.onrender.com/
   ```

4. **Run the application**:
   ```bash
   npm start
   ```

   The application will run at `http://localhost:3000`.

## Folder Structure

```
.
├── public          # Static files
├── src
│   ├── components  # Reusable components
│   ├── pages       # Page-specific components
│   └── App.js      # Main component
├── .env            # Environment variables
└── README.md       # Project documentation
```

## Key Functionalities

1. **User Authentication**
   - Secure signup and login.
   - User session management.

2. **Product Listing**
   - Fetch products from the backend API.
   - Display products in a grid layout.

3. **Search and Filter**
   - Search functionality for products.
   - Filters for categories, prices, etc.

4. **Cart Management**
   - Add products to the cart.
   - View cart items.

## Deployment Links

- **Frontend**: https://nordstrom-website1.netlify.app/
- **Backend**: http://localhost:8080

## Challenges Faced

- Integrating Redux Thunk for managing asynchronous state changes.
- Implementing responsive design for a seamless user experience.
- Deploying the application on multiple platforms.





