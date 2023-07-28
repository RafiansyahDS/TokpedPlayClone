require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mongoStr = process.env.DATABASE_URL;

mongoose.connect(mongoStr);

const database = mongoose.connection;

database.on('error',(err) => {
    console.error(err);
});

database.once('connected', /*async*/ () => {
    console.log('Database Connected');
  
    // Insert initial data into the collections to check the API response
    // const initialData = require('./data/initialData.json');
  
    // const VideoThumbnail = require('./models/videoThumbnail');
    // const Product = require('./models/product');
    // const Comment = require('./models/comment');
  
    // try {
    //   await VideoThumbnail.insertMany(initialData.videoThumbnails);
    //   await Product.insertMany(initialData.products);
    //   await Comment.insertMany(initialData.comments);
  
    //   console.log('Initial data inserted successfully.');
    // } catch (error) {
    //   console.error('Error inserting initial data:', error);
    // }
  });

const routes = require('./routes/router.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true 
}));

app.use('/api', routes);

app.listen(process.env.PORT, () =>{
    console.log(`listening on port ${process.env.PORT}`);
});