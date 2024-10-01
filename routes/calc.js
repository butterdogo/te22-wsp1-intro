import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    const queryNum1 = req.query.num1
    const queryNum2 = req.query.num2
    const num1 = parseInt(queryNum1)
    const num2 = parseInt(queryNum2)
    console.log(num1, num2)
    let sum = num1 + num2
    let dif = num1 - num2
    let product = num1 * num2
    let kvot = num1 / num2
    let pot = num1 ** num2
    console.log(sum)
    console.log(dif)
    console.log(product)
    console.log(kvot)
    console.log(pot)
    res.render("calc.njk", {
        title: "Calculator",
        num1: num1,
        num2: num2,
        sum: sum,
        dif: dif,
        product: product,
        kvot: kvot,
        pot: pot,
    })
})

export default router