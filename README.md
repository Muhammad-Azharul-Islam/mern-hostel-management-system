# Hostel Management System

A MERN stack application for hostel(Jamia Millia Islamia University, New Delhi) operations - student registration, authentication, complaints, and real-time chat.

## Features
- Student Registration & Authentication
- Dashboard with Statistics
- Payment Management
- Complaint System
- Real-time Chat
- Responsive Design

## Tech Stack
- **Frontend**: React.js, Bootstrap.
- **Backend**: Node.js, Express.js, MongoDB

##  Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)

### Installation
```bash
# Clone repository
git clone <repository-url>
cd HostelManagement

# Install dependencies
cd server && npm install
cd ../client && npm install
```

### Configuration
1. **Backend** - Create `server/.env`:
   ```env
   MONGODB_URI=mongodb://localhost:27017/hostel_management
   JWT_SECRET_KEY=your_secret_key
   PORT=5000
   ```

2. **Frontend** - Create `client/.env`:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

### Run Application
```bash
# Start backend
cd server && npm run dev

# Start frontend (new terminal)
cd client && npm start
```

Visit `http://localhost:3000` to access the application.


## Troubleshooting
- **MongoDB Connection**: Ensure MongoDB is running
- **Port Issues**: Check if ports 3000/5000 are available
- **Module Errors**: Run `npm install` in both directories

---