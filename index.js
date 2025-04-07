const a = require("express")
const b = require("cors")
 
const meuServer = a()
meuServer.use(b())
 
meuServer.get('/teste', (req, res)=>{
    res.send('mensagem nova')
})

meuServer.listen(3033, ()=>{
    console.log("Ver se")
})