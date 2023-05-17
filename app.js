const express = require('express');
const app = express();
const port = 8080;

app.use('/user', require('./routes/users'));

module.exports = app.listen(port, () => {
    console.log(`the port running ${port}`)
})