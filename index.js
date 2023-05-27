import express from 'express'
import mycors from 'cors'
import ServerConnection from './database.js'
import Collections from './models/saveCollections.js'
import { config } from 'dotenv'

config()

ServerConnection()

// import ServerConnection from './database.js'

const app = express()
const port = process.env.PORT || 3001
// const URL = process.env.URL_FRONTEND

app.use(
  mycors()
)

app.use(express.json())
app.use(express.text())

// Cuando te hagan un post http://localhost:3000/transactions
app.post('/register', async (req, res) => {
  const user = req.body
  // const token = user.auth.accessToken
  const newCollections = new Collections(user)

  newCollections
    .save()
    .then(() => console.log('new user added'))
    .then(() => {
      res.send({
        message: 'User registered in the database',
        user: user.user
      })
    })
    .catch(err => console.error('Error saving file', err))
})

app.post('/saveCollections', async (req, res) => {
  const collections = req.body

  const filter = { uid: collections.uid }
  const update = {
    collections: collections.collections,
    auth: collections.auth
  }

  await Collections.findOneAndUpdate(filter, update, { new: true })
    .then(() => console.log('new collections added'))
    .then(() => {
      res.send({
        message: 'updated collections',
        user: collections.user
      })
    })
})

app.post('/gettingCollections', async (req, res) => {
  const uid = req.body

  console.log(uid)
  const filter = { uid }

  const user = await Collections.findOne(filter)

  res.send({
    message: 'getting collections',
    user
  })
})

app.listen(port, () => {
  console.log(`Estoy ejecutandome en http://localhost:${port}`)
})
