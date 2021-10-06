const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost", {
  port: 1883,
});

client.on("connect", () => {
  client.subscribe("Weather", { cleanSession: false });
});

client.on("message", (topic, message) => {
  context = message.toString();
  console.log(context);
});
