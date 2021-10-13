const axios = require("axios");
const config = require("./config.js");

/**
 * Funzione asincrona per inviare richieste HTTP all'API OpenWeatherMap e ricevere informazioni meterologiche
 * @param city città di cui si vogliono ricevere informazioni
 * @returns informazioni meteorologiche della `city`
 */
const getWeather = async (city) => {
  const response = await axios.get(
    `${config.URL}${city}&appid=${config.API_KEY}`
  );
  return response.data;
};

module.exports = getWeather;
