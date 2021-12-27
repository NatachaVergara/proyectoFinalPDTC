const express = require('express')
const nodemailer = require('nodemailer')
const routerIndex = express.Router()
const routerTiendas = express.Router()
const routerAlmuerzo = express.Router()
const routerCena = express.Router()
const routerDesayuno = express.Router()
const routerLogin = express.Router()
const routerContact = express.Router()
const routerContactPost = express.Router()

//Rutas estáticas
routerIndex.get('/index', (req, res) => {
   return res.status(200).render(__dirname + `/public/index`)
})

routerTiendas.get('/tiendas', (req, res) => {
    return res.status(200).render(__dirname + `/public/tiendas`)

})

routerAlmuerzo.get('/almuerzo', (req, res) => {
    return res.status(200).render(__dirname + `/public/almuerzo`)

})
routerCena.get('/cena', (req, res) => {
    return res.status(200).render(__dirname + `/public/cena`)

})

routerDesayuno.get('/desayuno', (req, res) => {
    return res.status(200).render(__dirname + `/public/desayuno`)

})

routerLogin.get('/login', (req, res) => {
    return res.status(200).render(__dirname + `/public/login`)

})

routerContact.get('/contacto', (req, res) => {
    return res.status(200).render(__dirname + `/public/contacto`)

})


module.exports = {
    routerIndex,
    routerTiendas,
    routerAlmuerzo,
    routerCena,
    routerDesayuno,
    routerLogin,
    routerContact
  
};