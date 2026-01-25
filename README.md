# Froyalo

A modern, high-performance weather application built with **Ionic**, **Angular**, and **TypeScript**. Froyalo provides real-time weather updates, detailed forecasts, and location-based weather tracking with a sleek, responsive interface.

## ✨ Features

- 🌡️ **Real-time Weather**: Get current weather conditions for any location.
- 📅 **Detailed Forecast**: View upcoming weather trends and forecasts.
- 📍 **Location Search**: Easily search and add different cities to track.
- 📱 **Cross-Platform**: Designed to work seamlessly on web, iOS, and Android via Ionic.
- 🎨 **Modern UI**: Clean and intuitive interface for a premium user experience.

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

You need to have **Node.js** and **npm** installed. Additionally, it is recommended to install the Ionic CLI globally:

```bash
npm install -g @ionic/cli
```

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/Froyalo.git
    cd Froyalo
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application

To start the development server and view the app in your browser:

```bash
ionic serve
```

Alternatively, you can use the Angular CLI directly:

```bash
npm start
```

The application will be available at `http://localhost:8100` (for Ionic) or `http://localhost:4200` (for Angular).

## 📁 Project Structure

The core functionality of the application is organized within the `src/app` directory:

- **Home (`/home`)**: The primary dashboard showing featured weather data.
- **Weather (`/weather`)**: Detailed current weather information and city search functionality.
- **Forecast (`/forecast`)**: Extended forecasts and weather trends.
- **Services (`/services`)**: Business logic and API communication (OpenWeatherMap).
- **Models (`/models`)**: TypeScript interfaces for structured data.

## 🛠️ Technology Stack

- **Framework**: [Ionic](https://ionicframework.com/) & [Angular](https://angular.io/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: SCSS (Vanilla CSS principles)
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)