# MQTT Multichannel store and forward system 


Simple publish/subscribe MQTT system implemented with Node.js

## Prerequisites
- npm
    ```
    npm install npm@latest -g
    ```
## Installation

This app requires [Node.js](https://nodejs.org/) v10+ to run.
1) Get a free API Key at [OpenWeatherMap](https://openweathermap.org/api) 
2) Clone the repository
    ```sh
    git clone https://github.com/ocintnaf/iot-project.git
    ```
3) Install the dependencies
    ```sh
    cd iot-project
    npm install
    ```
4) Enter your API Key in `config.js`
    ```javascript
    API_KEY: "YOUR API KEY"
    ```
5) Start the broker, publisher and subscriber
    ```sh
    cd src
    node broker
    node publisher
    node subscriber
    ```

 
