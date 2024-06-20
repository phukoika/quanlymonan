import { MongoClient, Db, Collection } from 'mongodb'
import { config } from 'dotenv'
config()

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@doantotnghiep.lxfrpvs.mongodb.net/?retryWrites=true&w=majority&appName=DoAnTotNghiep`

class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }
  async connect() {
    try {
      await this.client.connect()
      await this.client.db('admin').command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  // get users(): Collection<User> {
  //   return this.db.collection(process.env.DB_USERS_COLLECTION as string)
  // }
  // get refreshTokens(): Collection<RefreshToken> {
  //   return this.db.collection(process.env.DB_REFRESH_TOKEN_COLLECTION as string)
  // }
}

const databaseService = new DatabaseService()
export default databaseService
