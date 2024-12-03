const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI || 'your-default-mongo-uri-here';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection failed:', err));
