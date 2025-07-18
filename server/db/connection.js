const mongoose = require("mongoose");
const { DB } = require("../config/config");

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MONGODB CONNECTED"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

module.exports = mongoose;