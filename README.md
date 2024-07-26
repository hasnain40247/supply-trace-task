# Supply-Trace-Task

This project sets up a company data viewer, utilizing a Flask backend API with a React frontend, all containerized using Docker.
## Task Breakdown
1. CompanyListPage : 
   - Displays a search and table of companies - takes you to the details when clicked.
2. CompanyDetailsPage : 
   - Needs a company to be clicked for redirection - navigating from navbar asks user to go back to list and select a company to view details
   -  Displays the locations in a table - upon hovering/clicking , the map component updates. The map has markers to view the address.
   - Location distribution visualizations are stacked below - accessible by scrolling down the page.
3. API documentation is served by Swagger.
4. Error Logging is done using StreamHandler.

## Project Structure

```
project-root/
│
├── backend-end/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── app.py
│
├── front-end/
│   ├── Dockerfile
│   ├── package.json
│   ├── public/
│   └── src/
│
├── docker-compose.yml
└── README.md
```

## Prerequisites
- Python 3.x
- Node 20.x
- Docker

## Setup Instructions

1. Clone this repository:
   ```
   git clone git@github.com:hasnain40247 supply-trace-task.git
   cd supply-trace-task
   ```

2. Build and run the Docker containers:
   ```
   docker-compose up --build
   ```

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API + Swagger Documentation: http://localhost:8080/apidocs

## Development

### Backend (Flask)

The Flask backend is located in the `back-end/` directory. The main application file is `app.py`.

To add new requirements:
1. Add them to `requirements.txt`
2. Rebuild the Docker container:
   ```
   docker-compose build flask-server
   ```

### Frontend (React)

The React frontend is located in the `front-end/` directory.

To add new npm packages:
1. Add them to `package.json`
2. Rebuild the Docker container:
   ```
   docker-compose build react-app
   ```

## Unit Tests

The unit tests can be run by navigating to the back-end and running the test_app.py script:
   ```
   cd back-end
   python -m unittest test_app.py
   ```

## Troubleshooting

If you encounter any issues:

1. Ensure all required ports are free (3000 for React, 8080 for Flask)
2. Check the Docker logs or the Flask logs set up for any error messages
3. Verify that all dependencies are correctly listed in `requirements.txt` and `package.json`

