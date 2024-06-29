# APOD Project

This project is a React-based web application that fetches and displays the Astronomy Picture of the Day (APOD) from NASA's API. The app also includes a sidebar for additional information about the image and a footer with a toggle button to display the sidebar.

## Features

- Fetches and displays the APOD image from NASA's API.
- Caches the APOD data in the local storage for the current day to avoid redundant API calls.
- Displays a loading state with a spinning gear icon while fetching data.
- Sidebar with additional information about the APOD image.
- Footer with a toggle button to display or hide the sidebar.

## Components

### Main
Displays the APOD image.

### Footer
Contains the project title and a toggle button to display the sidebar.

### SideBar
Displays additional information about the APOD image, including the date and explanation.

## Styles

- The application uses a dark theme with white text.
- The loading state displays a spinning gear icon.
- The sidebar slides in from the right and displays additional information about the APOD image.

## Usage

To run this project locally, follow these steps:

### Prerequisites

- Node.js installed on your machine.
- A NASA API key. You can get one by signing up on the [NASA API website](https://api.nasa.gov/).
### Installation

1. Clone this repository:

   ```sh
   git clone https://github.com/your-username/apod-project.git
   
2. Navigate to the project directory:

   ```sh
   cd apod-project

   
3. Install the dependencies:

   ```sh
   npm install

4. Create a .env file in the root directory of the project and add your NASA API key:

   ```sh
   VITE_NASA_API_KEY=your_nasa_api_key_here

### Running the app
- To start the application, run:
   ```sh
   npm run dev

- Open your browser and navigate to http://localhost:3000 to see the application in action.

Project Structure
```sh
src/
|-- components/
|   |-- Footer.js
|   |-- Main.js
|   |-- SideBar.js
|-- App.js
|-- index.css
|-- main.jsx
```
## CSS
- Global styles are defined in index.css.
- Flexbox is used for layout alignment and centering.
- Media queries are used to adjust the sidebar layout for larger screens.
## Local Storage
The APOD data is cached in the local storage with the key NASA-{today's date}.
If cached data for the current day is found, it is used instead of making a new API call.
## Environment Variables
The NASA API key is stored in an environment variable and accessed via import.meta.env.VITE_NASA_API_KEY.
## Animation
The loading state icon spins using a CSS keyframe animation.
## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments
- NASA API for providing the Astronomy Picture of the Day data.
- Font Awesome for the icons.
