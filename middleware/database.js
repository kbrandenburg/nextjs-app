import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

let connectionString = "mongodb://localhost"
//const client = new MongoClient({connectionString}, {
const client = new MongoClient('{mongodb://localhost:27017}', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('nextjs');
  return next();
}

const middleware = nextConnect();
middleware.use(database);
export default middleware;