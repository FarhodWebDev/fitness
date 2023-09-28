//

import client from "../connectDB.js";

async function getAll(req, res) {
 const users = await client.query("SELECT * FROM users");
 res.status(200).send({...users.rows});
}

async function postUser(req, res) {
 try {
  await client.query(
   `INSERT INTO users (
   first_name,
   last_name,
   dob,
   pic,
   email,
   added_day,
   phone_number,
   information,
   user_role,
   toifa,
   user_period,
   user_money,
   gender
   ) values (
   '${req.query.first_name}',
   '${req.query.last_name}',
   '${req.query.dob}',
   '${req.query.pic}',
   '${req.query.email}',
   '${req.query.added_day}',
   '${req.query.phone_number}',
   '${req.query.information}',
   '${req.query.role}',
   '${req.query.toifa}',
   '${req.query.period}',
   '${req.query.money}',
   '${req.query.gender}'
   )`
  );
  res.json("user added");
 } catch (e) {
  res.status(400).json({ ...e });
  console.log(e);
 }
}

export default { getAll, postUser };

// data:image/jpeg;base64,/
