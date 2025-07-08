<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# FeedPlanner - Copilot Instructions

## Project Overview
This is an educational MVP (Minimum Viable Product) for a food planning web application called "FeedPlanner". The project demonstrates full-stack development concepts using React.js for the frontend and Node.js/Express for the backend.

## Key Technologies
- **Frontend**: React.js, React Router DOM, CSS3
- **Backend**: Node.js, Express.js, CORS
- **Development**: Concurrently for running both servers
- **Data**: Mock data only - no real database or authentication

## Project Structure
```
/
├── client/          # React frontend application
├── server/          # Node.js backend API
├── package.json     # Root package.json with scripts
└── README.md        # Project documentation
```

## Development Guidelines

### Frontend (React)
- Use functional components with React Hooks
- Implement React Router DOM for navigation
- Follow component-based architecture
- Use CSS modules or regular CSS files for styling
- Focus on responsive design and accessibility
- All data should be mocked - no real API calls required

### Backend (Node.js/Express)
- Provide mock API endpoints that return JSON responses
- Use Express.js for routing and middleware
- Include CORS for cross-origin requests
- All responses should be mock data for demonstration
- No real database connections or authentication

### Styling Guidelines
- Use clean, modern, and responsive CSS
- Implement a green color scheme (primary: #5cb85c)
- Focus on user experience and intuitive navigation
- Include hover effects and smooth transitions
- Ensure mobile-first responsive design

### Mock Data Requirements
- All user interactions are for demonstration only
- Login credentials: teste@exemplo.com / 123456
- TMB calculations should use Harris-Benedict formula
- Budget planning should be dynamic based on user input
- Nutritionist appointments are simulated

### Code Standards
- Use meaningful variable and function names
- Include proper error handling with fallback mock data
- Add loading states for better user experience
- Include proper comments for complex logic
- Follow React best practices for state management

### Important Notes
- This is an educational project - emphasize that no real data is processed
- All payments, appointments, and user data are simulated
- Focus on demonstrating UI/UX concepts and frontend-backend integration
- Include disclaimers about the educational nature of the application

## Available Scripts
- `npm run dev`: Start both frontend and backend servers
- `npm run client`: Start only the React development server
- `npm run server`: Start only the Node.js backend server
- `npm run build`: Build the React application for production
