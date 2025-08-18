import express from "express";
import bruxos from "./src/data/bruxos.js"

const app = express();
const portServer = 3000

app.get("/", (req,res) => {
    res.send("Vamos de Harry Potter")
})

app.get("/bruxos", (req, res) => {
    res.json(bruxos);
});

app.listen(portServer, () => {
    console.log("🧙‍♂️ API dos Bruxos está no ar na porta 3000 !");

});