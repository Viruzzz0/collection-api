import mongoose from 'mongoose'

// Configura la conexión a MongoDB Atlas
function ServerConnection () {
  const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_DB, MONGODB_DB_TEST, NODE_ENV } = process.env

  const isTest = NODE_ENV === 'test'
    ? MONGODB_DB_TEST
    : MONGODB_DB

  console.log('isTest :>> ', isTest)
  mongoose.connect(
    `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@collections.ozzy4ha.mongodb.net/${isTest}?retryWrites=true&w=majority`
  ).then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error(err))
}

export default ServerConnection
