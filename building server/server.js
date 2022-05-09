const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (request, response) => {
     response.send('<h1>Hey👋</h1>');
})
app.listen(port, () => {
     console.log(`Server is running at port ${port}`);
})