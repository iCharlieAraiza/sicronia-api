require("dotenv").config();

const path = require("path");
const http = require("http");
const express = require("express");
var cors = require("cors");
const app = express();

const server = http.createServer(app);

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

const Pusher = require("pusher");

const pusher = new Pusher({
  appId: process.env.APP_ID,
  key: process.env.KEY,
  secret: process.env.SECRET,
  cluster: process.env.CLUSTER,
  encrypted: true,
});

app.get("/play", (req, res) => {
  console.log("play");
  pusher.trigger("my-channel", "my-event", {
    message: "play",
  });
  return res.send("Received a GET HTTP method: Play");
});

app.get("/api/v1/room", cors(), (req, res) => {
  console.log("room");
  pusher.trigger("my-channel", "users", {
    message: "user",
  });
  return res.send("Received a GET HTTP method: Room");
});

app.get("/api/v1/rooms/:id", cors(), (req, res) => {
  console.log("room");
  const json = {
    status: "200",
    message: "success",
    data: {
      id: req.params.id,
      url_audio:"https://coderadio-relay-nyc.freecodecamp.org/radio/8010/radio.mp3",
      url_test_audio: "https://coderadio-relay-nyc.freecodecamp.org/radio/8010/radio.mp3"
    },
  };
  return res.send(json);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
