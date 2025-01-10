```javascript
const { MongoClient } = require('mongodb');

const uri = "YOUR_MONGODB_CONNECTION_STRING"; // Replace with your connection string

async function run() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    // Insert a document (if it doesn't exist)
    const doc = { name: 'John Doe', age: 30 };
    const insertResult = await collection.insertOne(doc, { upsert: true });
    console.log(`Inserted ${insertResult.insertedCount} documents`);

    // Correct query using $regex with case-insensitive flag
    const cursor = collection.find({ name: { $regex: /john doe/i } }); // Use regex literal for correct case-insensitivity
    const result = await cursor.toArray();
    console.log(result);

  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```