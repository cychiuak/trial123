import express from "express";
import bodyParser from 'body-parser'
import http from "http"
import cors from 'cors'

const app = express();


app.use(express.json())

app.use(bodyParser.json({ limit: "1mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "1mb", extended: true }))


const port = 8080;
app.post('/', (req, res) => {
    res.json('Hello from the web server!');
  });
  

var httpServer = http.createServer(app);
httpServer.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
// app.listen(port, () => {
//     console.log(`Web server listening at http://localhost:${port}`);
//   });
