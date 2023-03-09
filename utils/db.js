const { MongoClient } = require('mongodb');

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';

    // const url = `mongodb://${host}:${port}/${database}`;
    const url = 'mongodb://localhost:27017/file_manager';

    this.client = new MongoClient(url, { useUnifiedToPology: true });

    this.client.connect();

    this.db = this.client.db(database);
  }

  async isAlive() {
    try {
      await this.client.isConnected();
      return true;
    } catch (error) {
      return false;
    }
  }

  async nbUsers() {
    const collection = this.db.collection('users');
    const count = await collection.countDocuments();
    return count;
  }

  async nbFiles() {
    const collection = this.db.collection('files');
    const count = await collection.countDocuments();
    return count;
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
