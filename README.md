# Weather Forecast Application

This is a React application that displays the current weather and a 5-day forecast for a given city.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a Windows, macOS, or Linux machine.
- You have a stable internet connection.

## Installation

### Step 1: Install Node.js

1. **Download Node.js**: Go to the [Node.js official website](https://nodejs.org/) and download the LTS version for your operating system.
2. **Install Node.js**: Run the downloaded installer and follow the prompts to complete the installation.
3. **Verify Installation**:
    - Open a terminal or command prompt.
    - Type `node -v` and press Enter. You should see the Node.js version number.
    - Type `npm -v` and press Enter. You should see the npm version number.

### Step 2: Setup Environment Variables (Windows Only)

1. **Open System Properties**:
    - Press `Windows + Pause/Break` or right-click on `This PC` and select `Properties`.
    - Click on `Advanced system settings`.
    - Click on `Environment Variables`.

2. **Add Node.js to PATH**:
    - Under `System variables`, find the `Path` variable and select it. Click `Edit`.
    - Click `New` and add the path to the directory where Node.js was installed (e.g., `C:\Program Files\nodejs\`).

3. **Verify PATH Configuration**:
    - Open a new command prompt and type `node -v` and `npm -v` to ensure they are recognized.

### Step 3: Clone the Repository

1. **Open a Terminal**: Open your preferred terminal or command prompt.
2. **Navigate to the Desired Directory**: Use the `cd` command to navigate to the directory where you want to clone the repository.
3. **Clone the Repository**:
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

### Step 4: Install Project Dependencies

1. **Install Dependencies**: Run the following command in your project directory:
    ```sh
    npm install
    ```

### Step 5: Start the Application

1. **Start the Development Server**:
    ```sh
    npm start
    ```

2. **Open the Application**: Open a web browser and go to `http://localhost:3000`.

## Troubleshooting

- **'react-scripts' is not recognized**:
    - Ensure you are in the correct project directory.
    - Run `npm install react-scripts --save` to install `react-scripts`.

- **Error: Cannot find module '...'**:
    - Ensure all dependencies are installed by running `npm install` again.
    - Check `package.json` to ensure all necessary packages are listed.

## Usage

Once the application is running, you can:

- Enter a city name in the search bar to get the current weather and a 5-day forecast for that city.
- The application will automatically detect your location and display the weather forecast for your city on initial load.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
