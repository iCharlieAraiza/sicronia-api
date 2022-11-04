require("dotenv").config();

const path = require("path");
const http = require("http");
const express = require("express");
var cors = require('cors')
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

app.get('/play', (req, res) => {
  console.log('play');
  pusher.trigger("my-channel", "my-event", {
    message: "play",
  });
  return res.send('Received a GET HTTP method: Play');
});

app.get('/api/v1/room', cors(), (req, res) => {
  console.log('room')
  pusher.trigger("my-channel", "users", {
    message: "user",
  });
  return res.send('Received a GET HTTP method: Room');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
