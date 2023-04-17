# CourseManagerAPI

This is a sample project for a simple CRUD API using Node.js, Express, and MongoDB. It is written in TypeScript.

## Requirements

- Node.js
- MongoDB

## Installation

1. Clone the repository: `git clone https://github.com/your-username/mon-net.git`
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and fill in the values.
4. Start the server: `npm run dev`

## Usage

The API has the following endpoints:

- `GET /api/courses`: Get all courses
- `GET /api/courses/:id`: Get a course by ID
- `POST /api/courses`: Create a new course
- `PUT /api/courses/:id`: Update a course by ID
- `DELETE /api/courses/:id`: Delete a course by ID

You can use a tool like Postman to test the API endpoints.

## Data

The API uses a MongoDB database to store course data. The database is seeded with sample data when the server starts.

The `exercise.txt` file contains the sample course data.

## Project Structure

The project structure follows the Model-View-Controller (MVC) pattern. The main components of the project are:

- `src/controllers`: Contains the controllers that handle HTTP requests and responses.
- `src/models`: Contains the Mongoose models for the data.
- `src/routes`: Contains the Express routes for the API endpoints.
- `src/index.ts`: Entry point for the server.

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- TypeScript