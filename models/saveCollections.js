import { model, Schema } from 'mongoose'

// Crea un modelo de usuario
const collectionsSchema = new Schema({
  user: String,
  collections: Array,
  auth: Object,
  uid: String
})

const Collections = model('collections', collectionsSchema)

export default Collections
