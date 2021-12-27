const express = require('express')


const app = express();
const {
    routerIndex, 
    routerTiendas, 
    routerAlmuerzo,
    routerCena,
    routerDesayuno,
    routerLogin,
    routerContact
    } = require('./routes/rutas');

app.use(express.static('public'))
app.use(express.json())


//archivos estáticos
app.use('/', routerIndex)
app.use('/', routerTiendas)
app.use('/', routerAlmuerzo)
app.use('/', routerCena)
app.use('/', routerDesayuno)
app.use('/', routerLogin)
app.use('/', routerContact)






const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})