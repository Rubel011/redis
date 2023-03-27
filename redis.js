const { createClient } = require("redis")
const client = createClient({
    url:"redis-cli -u redis://default:L3Sj9NbEpYnIGrnknMcdOoHoD0EVNXLl@redis-14976.c301.ap-south-1-1.ec2.cloud.redislabs.com:14976"
});
client.connect();

module.exports = { client }