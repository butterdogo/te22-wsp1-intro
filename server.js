import express, { response } from "express"
import nunjucks from "nunjucks"


const app = express()

nunjucks.configure("views", {

    autoescape: true,
    express: app,


})


app.use(express.static("public"))


app.get("/", (request, response) => {
response.render("index.njk", {

    message: "Hello world!",
    title: "Hem",
    items: ["A", "B", "C", "D"],
})

app.get("/om", (request, response) => {
})

})

app.get("/readme", (request, response) =>{
console.log(Request)

response.send("Bara en response")


})


app.listen(3000, () => {

    console.log('Server is running on http://localhost:3000')

})



