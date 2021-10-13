/**
 * Funzione per far partire un Subscriber
 * @param qos Quality of Service desiderata (0, 1 o 2)
 * @param {*} topic Topic a cui si vuole iscriversi
 * @param {*} cleansession Specifica il tipo di sessione che si vuole creare
 * @param {*} id Identificatore del client
 */
const startSubscriber = (qos, topic, cleansession, id) => {
  const mqtt = require("mqtt");

  const client = mqtt.connect("mqtt://localhost", {
    port: 1883,
    clean: cleansession,
    clientId: "mqttjs_" + id,
  });

  client.on("connect", () => {
    client.subscribe(topic, { qos: qos });
  });

  client.on("message", (topic, message) => {
    context = message.toString();
    console.log(context);
  });
};

startSubscriber(1, "Belluno", false, "1");

exports.startSubscriber = startSubscriber;
