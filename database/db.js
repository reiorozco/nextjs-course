import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const { DB_USER, DB_PASS } = process.env;
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@vidly.ol0he.mongodb.net/meetups?retryWrites=true&w=majority`;
export const client = new MongoClient(uri);
