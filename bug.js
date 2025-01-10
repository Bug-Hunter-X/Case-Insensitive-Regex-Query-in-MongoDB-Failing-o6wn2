```javascript
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    // Insert a document
    const doc = { name: 'John Doe', age: 30 };
    const result = await collection.insertOne(doc);
    console.log(`Inserted ${result.insertedCount} documents`);

    // Query using $regex with a case-insensitive flag
    const cursor = collection.find({ name: { $regex: 'john doe', $options: 'i' } });
    const result2 = await cursor.toArray();
    console.log(result2);

  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```