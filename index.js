import express from 'express'
import mycors from 'cors'
import ServerConnection from './database.js'
import Collections from './models/saveCollections.js'
import { config } from 'dotenv'

config()
ServerConnection()

const app = express()
const port = process.env.PORT || 3001

app.use(
  mycors()
)

app.use(express.json())
app.use(express.text())

// Cuando te hagan un post http://localhost:3000/transactions
app.post('/register', async (req, res) => {
  const user = req.body
  const uid = req.body.uid

  const userMdb = await Collections.findOne({ uid })

  if (userMdb) {
    console.log('user exists')
    res.send({
      message: 'user exists'
    })
    return
  }

  const newCollections = new Collections(user)
  const messages = {
    message: 'User registered in the database',
    user: user.user
  }

  newCollections
    .save()
    .then(() => console.log('new user added'))
    .then(() => {
      res.send(messages)
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
  const { uid } = await req.body
  const filter = { uid }

  const user = await Collections.findOne(filter)
  const msg = {
    message: 'getting collections',
    user
  }

  res
    .status(200)
    .send(msg)
})

const server = app.listen(port, () => {
  console.log(`Estoy ejecutandome en http://localhost:${port}`)
})

export { app, server }
