# Database Setup

## Quick Start

1. **Install MongoDB** (if not already installed)
2. **Start MongoDB service**
3. **Run setup commands**:
   ```bash
   npm run db:setup
   ```

## Available Commands

- `npm run db:init` - Initialize database with indexes
- `npm run db:seed` - Populate with sample data
- `npm run db:setup` - Run both init and seed

## Database Structure

### Collections

1. **contacts** - Contact form submissions
2. **projects** - Portfolio projects
3. **experiences** - Work experience entries

### Environment Variables

Update `.env` file:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
```

## Production Setup

For production, use MongoDB Atlas:
1. Create cluster at mongodb.com
2. Get connection string
3. Update MONGODB_URI in production environment