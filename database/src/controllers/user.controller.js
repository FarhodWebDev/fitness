//

import client from "../connectDB.js";

async function getAll(req, res) {
const users = await client.query("SELECT * FROM users ORDER BY ASC")
 res.send({ message: "hello" });
}

async function postUser(req, res) {
 try {
  // req.query();
  await client.query(
   `INSERT INTO fitness.users (${
    (req.params.first_name,
    req.params.last_name,
    req.params.dob,
    req.params.pic,
    req.params.email,
    req.params.added_day,
    req.params.phone_number,
    req.params.information,
    req.params.role,
    req.params.toifa,
    req.params.period,
    req.params.money)
   })`
  );
  res.json("user added");
 } catch (e) {
  res.status(400).json({...e});
 }
}

export default { getAll, postUser };

// data:image/jpeg;base64,/
