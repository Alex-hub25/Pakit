const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://aellett1997_db_user:awszGuIN4366@waitlist.fuqit7j.mongodb.net/waitlist?retryWrites=true&w=majority&appName=Waitlist";
const client = new MongoClient(uri);

client.connect()
  .then(() => {
    console.log("✅ Connected to MongoDB successfully");
    return client.db("waitlist").listCollections().toArray();
  })
  .then(cols => {
    console.log("📦 Collections:", cols.map(c => c.name));
  })
  .catch(err => console.error("❌ Connection failed:", err))
  .finally(() => client.close());

