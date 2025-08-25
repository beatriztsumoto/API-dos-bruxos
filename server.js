import express from "express";
import dados from "./src/data/dados.js"

const { bruxos, casas, varinhas, animais, pocoes } = dados;

const app = express();
app.use(express.json());

const portServer = 3000;

app.get("/", (req,res) => {
    res.send("Vamos de Harry Potter")
});

app.get("/bruxos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const bruxo = bruxos.find((b)=>b.id === id);

    if (bruxo) {
         res.status(200).json(bruxo);
    }else {
        res.status(404).json({
            mensagem: "Nunhum bruxo encontrado"
        })
    }
    });

app.get("/casas", (req, res) => {
    const id = parseInt(req.params.id);
    const casa = casas.find((b)=>b.id === id);

   if (casas) {
         res.status(200).json(casas);
    }else {
        res.status(404).json({
            mensagem: "Nunhuma casa encontrada"
        })
    }
});

app.get("/varinhas", (req, res) => {
    const id = parseInt(req.params.id);
    const varinha = varinhas.find((b)=>b.id === id);

    if (varinhas) {
         res.status(200).json(varinhas);
    }else {
        res.status(404).json({
            mensagem: "Nunhuma varinha encontrada"
        })
    }
});

app.get("/animais", (req, res) => {
    const id = parseInt(req.params.id);
    const animal = animais.find((b)=>b.id === id);
    
    if (animais) {
         res.status(200).json(animais);
    }else {
        res.status(404).json({
            mensagem: "Nunhum animal encontrado"
        })
    }
});

app.get("/pocoes", (req, res) => {
    const id = parseInt(req.params.id);
    const pocao = pocoes.find((b)=>b.id === id);

    if (pocoes) {
         res.status(200).json(pocoes);
    }else {
        res.status(404).json({
            mensagem: "Nunhuma poção encontrada"
        })
    }
});

app.listen(portServer, () => {
    console.log(`🧙‍♂️ API dos Bruxos está no ar em http://localhost:${portServer} !`);

});