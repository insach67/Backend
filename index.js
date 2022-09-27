const express = require('express')
const bollyRouter = require('./route/Bollywood')
const hollyRouter = require('./route/Hollywood')
const techRouter = require('./route/Technology')
const sportsRouter = require('./route/Sports')
const healthRouter = require('./route/Health')
const homeRouter = require('./route/Home')
const cors = require("cors")
const app = express()

app.use(cors())
app.use("/api",bollyRouter)
app.use("/api",hollyRouter)
app.use("/api",techRouter)
app.use("/api",sportsRouter)
app.use("/api",healthRouter)
app.use("/api",homeRouter)


app.listen(process.env.PORT||8000,()=>{
    console.log("app is running");
})