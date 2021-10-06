const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost", {
  port: 1883,
  clean: false,
  clientId: "mqttjs_1",
});

client.on("connect", () => {
  client.subscribe("Weather", { qos: 1 });
});

client.on("message", (topic, message) => {
  context = message.toString();
  console.log(context);
});
