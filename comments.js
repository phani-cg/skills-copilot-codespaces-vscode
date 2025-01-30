// Create web server
// 1. Importing the express module
const express = require('express');
// 2. Create an express application
const app = express();
// 3. Define a route
app.get('/', (req, res) => {
    res.send('Hello World');
});
// 4. Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});