const { Client } = require('pg')
const connectionString = "postgres://thesisio_instance_psql_user:4vc9goq7BsnNzyby7ft4xaGzOhVgQkax@dpg-ci9c8nl9aq02ihur6r5g-a.singapore-postgres.render.com/thesisio_instance_psql";
const client = new Client({
    connectionString,
    ssl: {
        rejectUnauthorized: false // Set to `true` if the SSL/TLS certificate should be verified
    }
})

client.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Connected");
})

module.exports = {
    query : (text , params , callback) => {
        return client.query(text , params , callback)
    }
}