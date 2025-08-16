const amqplib = require("amqplib");

let channel = null,
  connection = null;
let isConnected = false;

async function connectQueue() {
  try {
    connection = await amqplib.connect("amqp://localhost");
    channel = await connection.createChannel();
    await channel.assertQueue("noti-queue");
    isConnected = true;
    console.log("✅ Connected to RabbitMQ");
  } catch (error) {
    isConnected = false;
    console.warn("⚠️ Could not connect to RabbitMQ:", error.message);
  }
}

async function sendData(data) {
  try {
    if (!isConnected || !channel) {
      console.warn("⚠️ Cannot send to queue: RabbitMQ not connected.");
      return;
    }
    await channel.sendToQueue("noti-queue", Buffer.from(JSON.stringify(data)));
  } catch (error) {
    console.log("❌ Queue error:", error.message);
  }
}

module.exports = {
  connectQueue,
  sendData,
};
