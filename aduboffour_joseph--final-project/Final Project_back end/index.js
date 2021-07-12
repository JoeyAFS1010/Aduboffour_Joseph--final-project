import express from 'express'
import entriesRoutes from './src/entriesRoutes.js'
import usersRoutes from './src/usersRoutes.js'
require("dotenv").config();

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use((req, res, next) => 
{
    console.log(`Requested URL: ${req.originalUrl}`)
    next()
})
app.use((req, res, next) => 
{
    next()
    console.log(`Finished Request: ${req.originalUrl}`)
})

app.use('/', entriesRoutes, usersRoutes)

app.use((error, req, res, next) => 
{
    if (res.headersSent) {
        return next(error)
    }
    console.error(error.stack)
    return res.status(500).send({error: "Unexpected error found"})
})


export default app.listen(PORT, function() 
{
    console.log(`Express server listening on port ${PORT}.`)
})