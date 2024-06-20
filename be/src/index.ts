import express from 'express'
import databaseService from '~/services/database.services'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import usersRouter from '~/routes/user.routes'
const app = express()
const port = 3000

databaseService.connect()
app.use(express.json())
app.use('/users', usersRouter)

app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
