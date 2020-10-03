var admin = require("firebase-admin");
var serviceAccount = require("./connection.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  //don't forget
  //Change to You URL here and Change the file "connection.json" 
  databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxx"
});

const db = admin.firestore();

module.exports = db;

