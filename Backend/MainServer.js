const express = require('express');
const cors = require('cors');
const sendmailroute = require('../Backend/Routes/Getemail.js'); // Adjust the path to your email route

const app = express();
const port = 3030;

app.use(cors());
app.use(express.json()); // To parse incoming JSON requests

// Use the sendmailroute for the '/sendmail' endpoint
app.use('/sendmail', sendmailroute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
