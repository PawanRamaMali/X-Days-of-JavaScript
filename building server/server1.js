const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (request, response) => {
     response.send('<h1>Hey👋</h1>');
})
app.listen(port, () => {
     console.log(`Server is running at port ${port}`);
})

/* SIGKILL is the signal that tells a process to immediately terminate, and would ideally act like process.exit().

SIGTERM is the signal that tells a process to gracefully terminate.
It is the signal that's sent from process managers like upstart or supervisord and many others.

*/

process.on('SIGTERM', () => {
     server.close(() => {
       console.log('Process terminated');
     });
   });