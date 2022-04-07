const express = require('express');
const EventEmitter = require("events");

const app = express();
const event = new EventEmitter();
app.listen(5000)

let count = 0;

event.on("Fired", () => {
    count++;
    console.log('Event Called: ', count);
})

app.get('/', (req, res) => {

    res.send('Home Router Called');
    event.emit("Fired")
})

app.get('/allUsers', (req, res) => {
    res.send('All Users Router Called');
    event.emit("Fired")
})

app.get('/activeUsers', (req, res) => {
    res.send('Active Users Router Called');
    event.emit("Fired")
})