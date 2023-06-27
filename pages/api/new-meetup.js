// api/new-meetup
// POST /api/mew-meetup

import { MongoClient } from "mongodb";

// request obj => containing data about incoming req.
// response obj=> will be needed for sending req

// .connect()   => return promise : - we use async await.

async function handler(req, res) {
  // to check what kind of req is send here 'POST'

  if (req.method === "POST") {
    const data = req.body;

    //we insert this to database user insertOne{} below we pass data  => const { title, image, addres, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://vaibhavdesai510:0LpLmG5cJAsM73Rq@cluster0.7wbat33.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollections = db.collection("meetups");

    const result = await meetupsCollections.insertOne({ data });

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup Inserted" });
  }
}

export default handler;
