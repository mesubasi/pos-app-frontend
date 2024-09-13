# MERN Stack POS Application - Front End

This repository contains the front end of the MERN Stack POS Application. The front end is built using React and provides the user interface for the POS system.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [Technologies Used](#technologies-used)
- [Images/Screenshots](#imagesscreenshots)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/mesubasi/pos-app-frontend.git
   cd pos-app-frontend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a .env file in the root of the project and add the following variables:

   ```sh
   REACT_APP_SERVER_URL = "Backend Service Url"
   ```

4. **Start the development server:**

   ```sh
   npm run dev
   ```

   The application will start on `http://localhost:5173`.

## Usage

- Navigate to `http://localhost:5173` in your web browser.
- Use the provided interface to manage sales, inventory, and other POS features.

## Features

- **User Authentication:** Secure login and registration.
- **Inventory Management:** Add, update, and delete inventory items.
- **Sales Management:** Track and manage sales transactions.
- **Reports:** View sales and inventory reports.

## Technologies and Packages Used

- **React**
- **Vite**
- **React Redux**
- **React Router**
- **Ant Design**
- **Tailwind CSS**
- **Google Fonts**
- **React to Print**
- **React Highlight Words**

## Images/Screenshots

Here are some screenshots of the application:

### Login Page

![Login Page](https://raw.githubusercontent.com/mesubasi/pos-app-frontend/refs/heads/main/public/project-picture/1.PNG)

### Dashboard

![Dashboard](https://raw.githubusercontent.com/mesubasi/pos-app-frontend/refs/heads/main/public/project-picture/3.PNG)

### Inventory Management

![Inventory Management](https://raw.githubusercontent.com/mesubasi/pos-app-frontend/refs/heads/main/public/project-picture/2.PNG)

### Sales Management

![Sales Management](https://raw.githubusercontent.com/mesubasi/pos-app-frontend/refs/heads/main/public/project-picture/4.PNG)

### Invoice Viewing

![Invoice Viewing](https://raw.githubusercontent.com/mesubasi/pos-app-frontend/refs/heads/main/public/project-picture/5.PNG)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## Environment Variables

The following environment variables are required for the application to run:

- REACT_APP_SERVER_URL = API URL after installation of Pos-app-backend on the server

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
