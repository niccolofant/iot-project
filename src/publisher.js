const mqtt = require("mqtt");

const getWeather = require("./api-clients/openWeatherMap/openWeatherMapClient");
const getCryptoPrice = require("./api-clients/cryptoCompareClient");

const client = mqtt.connect("mqtt://localhost", {
  port: 1883,
  clean: false,
  clientId: "mqttjs_" + Math.random().toString(16).substr(2, 8),
});

client.on("connect", () => {
  console.log("connected");
  let i = 0;
  setInterval(() => {
    var weatherPromise = Promise.resolve(getWeather("belluno"));

    weatherPromise.then((data) => {
      var object = JSON.parse(data).coord;
      client.publish("Weather", i + " " + JSON.stringify(object), {
        qos: 2,
      });
      i++;
    });
    /*
    var cryptoPromise = Promise.resolve(getCryptoPrice("ETH", "EUR"));
    cryptoPromise.then((data) => {
      client.publish("Crypto", data, { qos: 2 });
    });
    console.log("messages sent");*/
  }, 5000);
});
