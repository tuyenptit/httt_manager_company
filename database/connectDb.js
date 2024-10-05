const mongoose = require('mongoose');

async function connectDb() {
  await mongoose.connect('mongodb+srv://sonfe:sontr2011@cluster0.w0w7m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}

module.exports  = {connectDb};