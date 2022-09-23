
var admin = require("firebase-admin");

var serviceAccount = require("../controllers/servicekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


module.exports = admin;