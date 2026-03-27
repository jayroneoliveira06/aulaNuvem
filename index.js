import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send("Servidor rodando na nuvem 🚀");

})
app.get('/teste', (req, res)=>{
    res.send("Rota de teste funcionando!");
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("Servidor rodando")
})