# College Management Backend

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Configure MongoDB Atlas**
   - Create account at https://cloud.mongodb.com
   - Create a new cluster
   - Get connection string
   - Update `.env` file with your MongoDB URI:
   ```
   MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/college_management?retryWrites=true&w=majority
   ```

3. **Start Backend Server**
   ```bash
   npm run dev
   ```
   Server will run on http://localhost:5000

## API Endpoints

- `POST /api/students/register` - Register new student
- `GET /api/students` - Get all students
- `GET /api/departments` - Get all departments
- `POST /api/departments` - Add new department
- `GET /api/announcements` - Get announcements
- `POST /api/announcements` - Add announcement
- `POST /api/auth/login` - User login

## Frontend Connection

Your React app will connect to backend at `http://localhost:5000`