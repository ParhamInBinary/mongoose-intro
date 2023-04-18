import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Hello world");
});

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017");
  console.log("Connected to Database");

  app.listen(3000, () =>
    console.log(
      "Server is running on: http://localhost:3000"
    )
  );
}

main().catch(console.error);