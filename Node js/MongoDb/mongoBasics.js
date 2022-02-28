const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const dbName = "eDelta";
const main = async () => {
  try {
    await client.connect();
    console.log("connected successfully to server!");

    const db = client.db(dbName);
    const collection = db.collection("employee");

    const insertResult = await collection.insertMany([
      { a: 1, b: 100 },
      { a: 2 },
      { a: 3 },
    ]);

    console.log("Inserted documents =>", insertResult);
    const updateResult = await collection.updateOne(
      { b: 100 },
      { $set: { b: 20 } }
    );
    console.log("Updated doc ====>", updateResult);
  } catch (error) {
    console.log(error.message);
  }
};
main();
