import mongoose from 'mongoose'

// Configura la conexión a MongoDB Atlas
function ServerConnection () {
  mongoose.connect(
    'mongodb+srv://milanesa:Ymd5kxUrezeiinQb@collections.ozzy4ha.mongodb.net/store?retryWrites=true&w=majority'
  ).then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error(err))
}

export default ServerConnection
