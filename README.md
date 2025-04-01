# Express.js Dynamic Web App

## Project Overview
This is a simple web application built using **Express.js** and **EJS** that dynamically renders pages and simulates a dice roll. The project also fetches user data from a JSON file to mimic Instagram profile data.

## Features
- **Home Page**: Renders a basic home page using EJS.
- **Dice Roll Simulation**: Generates a random dice value and displays it dynamically.
- **Instagram Profile Lookup**: Fetches data from a JSON file and renders an Instagram-style user profile page.
- **Static File Serving**: Serves static assets from the `/public` directory.
- **404 Handling**: Displays a message when a user accesses a non-existent page.

## Technologies Used
- **Node.js** & **Express.js**: Backend framework for handling routes and rendering views.
- **EJS (Embedded JavaScript Templates)**: For dynamic content rendering.
- **JSON Data Handling**: Fetches mock Instagram profile data.
- **Path Module**: Used to manage file paths efficiently.

## Installation & Setup
### Prerequisites
Ensure you have **Node.js** installed on your system.

### Steps to Run
1. Clone the repository:
   ```sh
   git clone https://github.com/deshinenikarthik/Express-Dynamic-Web-App.git
   ```
2. Navigate into the project directory:
   ```sh
   cd Express-Dynamic-Web-App
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the server:
   ```sh
   node app.js
   ```
5. Open your browser and go to:
   ```sh
   http://localhost:3000
   ```

## Folder Structure
```
Express-Dynamic-Web-App/
│-- public/            # Static assets (CSS, images, etc.)
│-- views/             # EJS template files
│-- data.json          # Mock Instagram user data
│-- app.js             # Main Express application file
│-- package.json       # Project dependencies
│-- README.md          # Project documentation
```

## Usage
### Access Routes
- Home Page: `/`
- Dice Roll: `/rolldice`
- Instagram Profile Lookup: `/ig/:username`
- Invalid Route Handling: `*` (Displays a 404 message)

## Example Data (data.json)
```json
{
  "john_doe": {
    "followers": 1200,
    "following": 250,
    "posts": 34
  }
}
```

## Contributing
If you’d like to contribute, feel free to fork the repository and submit a pull request.

## License
This project is open-source and available under the **MIT License**.
