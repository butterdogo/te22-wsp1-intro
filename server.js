import express, { response } from "express"
import nunjucks from "nunjucks"


const app = express()

nunjucks.configure("views", {

    autoescape: true,
    express: app,


})


app.use(express.static("public"))


app.get("/", (request, response) => {
    console.log(request.query)
    const name = request.query.name
    response.render("index.njk", {

        message: `Hallåj ${name}`,
        title: "Hem",
        items: ["A", "B", "C", "D"],
    })

    app.get("/om", (request, response) => {
    })

})

app.get("/readme", (request, response) => {
    console.log(Request)

    response.send("Bara en response")


})




app.get(`/watch`, (request, response) => {
    const movieID = request.query.v
    console.log(movieID)

    const movies = {
        "ID": {
            title: "Ahmeds pizzeria",
            year: "2019",
        }
    }
    const movie = movies[movieID]
    console.log(movie)

    response.render("watch.njk", {
        title: "watch",
        movie: movie,
    })


    //response.json(movie)

})

app.get(`/ytub`, (request, response) => {

    const ID = request.query.v
    console.log(ID)
    response.render(`ytub.njk`, {
        title: "youtube",
        ID: ID,

    })
})

app.listen(3000, () => {

    console.log('Server is running on http://localhost:3000')

})
