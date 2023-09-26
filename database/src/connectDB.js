//

import pkg from "pg";

const { Client } = pkg;

const client = new Client({
 host: "127.0.0.1",
 port: "8655",
 password: '2251',
 database: "fitness",
 user: "postgres"
});

await client.connect();

export default client;
