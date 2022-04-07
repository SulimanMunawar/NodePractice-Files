const express = require('express');
const app = express();
const path = require('path');

htmlFiles = path.join(__dirname, "public");
// console.log("Dir PATH -->: ", htmlFiles);
const PORT = 5500;

app.use(express.static(htmlFiles));
app.listen(PORT, console.log(`Server started at port: http://localhost:${PORT}`));

app.get('', (req, res) => {
    res.sendFile(`${htmlFiles}/index.html`)
})
app.get('/about', (req, res) => {
    res.sendFile(`${htmlFiles}/about.html`)
})
app.get('/contact', (req, res) => {
    app.sendFile(`${htmlFiles}/contact.html`);
})
app.get('*', (req, res) => {
    res.sendFile(`${htmlFiles}/404.html`);
})