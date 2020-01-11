// require('dotenv').config({ path: '.env' });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const socketIO = require('socket.io');

const http = require('http');

const app = express();

const server = http.createServer(app);
const io = socketIO(server);

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/update-editor', (req, res) => {
  io.sockets.emit('text-update', {
    ...req.body,
  });

  res.status(200).send('OK');
});

app.set('port', process.env.PORT || 5000);

server.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
