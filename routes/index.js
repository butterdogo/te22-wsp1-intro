import express from "express"

const router = express.Router()

router.get("/test", (req, res) =>{
res.send("hello world")
})

router.get("/", (request, response) => {
    console.log(request.query)
    const name = request.query.name
    response.render("index.njk", {

        message: `Hallåj ${name}`,
        title: "Hem",
        items: ["A", "B", "C", "D"],
    })

    router.get("/om", (request, response) => {
    })

})

router.get("/readme", (request, response) => {
    console.log(Request)

    response.send("Bara en response")


})


router.get(`/watch`, (request, response) => {
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

router.get(`/ytub`, (request, response) => {

    const ID = request.query.v
    console.log(ID)
    response.render(`ytub.njk`, {
        title: "youtube",
        ID: ID,

    })
})


export default router