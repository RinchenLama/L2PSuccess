import express from "express";
import cors from "cors";
import router from './routes/router.js';

const app =  express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(express.static("./"));

const port = 3000;

app.get("/", (request, response) => {
    response.sendFile('index.html', {root: '.'});
});

app.listen(port, ()=> {
    console.log("port running on http://localhost:"+port);
})