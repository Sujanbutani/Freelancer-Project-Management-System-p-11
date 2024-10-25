# Freelancer Project Management System API

This is a simple backend for a task-freelancer project management system built with Node.js, Express, and MongoDB. The system includes user authentication, project management, payment handling, and bulk import/export functionalities.

## Features

- User Authentication: JWT-based authentication for secure access.
- Project Management: CRUD operations for projects.
- Payment Management: CRUD operations for payments, including a simulation of marking payments as paid.
- CSV Import/Export: Bulk import of project data from CSV files and export to CSV.

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- nodemon
- JWT for authentication
- Multer for file uploads
- CSV-parser for processing CSV files

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sujanbutani/Freelancer-Project-Management-System-p-11.git

2. Install dependencies:

    ```bash
    npm install

3. .env file

     ```
    MONGO_URI=your_mongo_db_connection_string
    PORT=5000
    JWT_SECRET=your_jwt_secret_key
    ```

4. Start the development server:

   ```bash
   npm start
   The server should now be running at http://localhost:5000
   ```

## API Endpoints

### User Authentication
1. Register User (Post) :- localhost:5000/api/auth/register
2. Login User (Post) :- localhost:5000/api/auth/login

### Project  Management
1. Project  Api (Post) :- localhost:5000/api/projects
    - Requires JWT token in the Authorization header.
2. Project  Api (Get - All) :-  localhost:5000/api/projects
3. Project  Api (Update) :- localhost:5000/api/projects/<project_Id>
4. Project  Api (Delete) :- localhost:5000/api/projects/<project_Id>
5. Project  Api (Post - Import Projects from CSV) :-  localhost:5000/api/projects/import
6. Project  Api (Get - Export Projects to CSV) :-  localhost:5000/api/projects/export

### Payment Management
1. Payment Api (Post) :- localhost:5000/api/payments
    - Requires JWT token in the Authorization header.
2. Payment Api (Get - All) :- localhost:5000/api/payments
3. Payment Api (Get - One) :- localhost:5000/api/payments/<payment_Id>
4. Payment Api (Update) :- localhost:5000/api/payments/<payment_Id>
5. Payment Api (Delete) :- localhost:5000/api/payments/<payment_Id>
6. Payment Api (Put - Mark Payment as Paid) :- localhost:5000/api/payments/<payment_Id>/mark-paid

## Environment Variables
- PORT: The port for the server to listen on.
- MONGODB_URI: Your MongoDB connection string.
- JWT_SECRET: Secret key for signing JWT tokens.