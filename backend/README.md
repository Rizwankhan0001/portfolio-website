# Backend

Express.js server with MongoDB integration:

- `server.js` - Main server file
- `src/config/` - Database configuration
- `src/controllers/` - Route handlers
- `src/models/` - MongoDB schemas
- `src/routes/` - API endpoints

## Setup
```bash
npm install
npm start
```

## Environment Variables
Create `.env` file with:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:3000
```