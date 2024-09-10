# Webbserver intro



## Linux commandon

* pwd - visar aktiv mapp

* ls - listar alla filer i mappen

* ll - visar även dolda filer, är ett alias för ls -la

* cd - flytta mellan mappar och filer

* Nano - skriva i en fil

* mkdir - skapa en fil (make directory)


## Node

för att initiera ett nytt node projekt kör jag "npt init -y" i en mapp, detta skapar en package.json fil.

*

*

## Express

Vi skapade en express server genom att skriva följande i server.js


import express from "express"

const app = express()

app.use(express.static("public"))

app.get('/', (req, res)=> {

console.log(req)

res.status(402).sendFile("status code")

//res.send('Hello world')


})

app.listen(3000,()=>{

console.log('Server is running on http://localhost:3000')


})

Koden skapar en localhost som finns på datorn. Där kan man länka en HTML fil för att se en webbsida


## Nunjucks

det är ett % tecken på olika ställen samnt mycket mer att skriva och olika .njk filer.