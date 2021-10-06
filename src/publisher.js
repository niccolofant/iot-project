const mqtt = require("mqtt");

const getWeather = require("./api-clients/openWeatherMap/openWeatherMapClient");
const getCryptoPrice = require("./api-clients/cryptoCompareClient");

const client = mqtt.connect("mqtt://localhost", {
  port: 1883,
});

client.on("connect", () => {
  console.log("connected");
  setInterval(() => {
    var weatherPromise = Promise.resolve(getWeather("belluno"));

    weatherPromise.then((data) => {
      client.publish("Weather", data, { qos: 2 });
    });
    /*
    var cryptoPromise = Promise.resolve(getCryptoPrice("ETH", "EUR"));
    cryptoPromise.then((data) => {
      client.publish("Crypto", data, { qos: 2 });
    });
    console.log("messages sent");*/
  }, 5000);
});
