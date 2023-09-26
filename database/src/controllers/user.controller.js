//

import client from "../connectDB.js";

async function getAll(req, res) {
 const users = await client.query("SELECT * FROM users ORDER BY ASC");
 res.send({ message: "hello" });
}

async function postUser(req, res) {
 try {
  // req.query();
  await client.query(
   `INSERT INTO fitness.users (${
    (req.query.first_name),(
    req.query.last_name,
    req.query.dob,
    req.query.pic,
    req.query.email,
    req.query.added_day,
    req.query.phone_number,
    req.query.information,
    req.query.role,
    req.query.toifa,
    req.query.period,
    req.query.money)
   })`
  );
  res.json("user added");
 } catch (e) {
  res.status(400).json({ ...e });
  console.log(e);
 }
}

export default { getAll, postUser };

// data:image/jpeg;base64,/
