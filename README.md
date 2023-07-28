# Tokopedia Play Clone

This project is to clone the Tokopedia Play website, with a midterm requirement to create a backend for the Tokopedia Play clone application.

## Database Structure

The project uses MongoDB as the database and utilizes Mongoose as the ODM (Object-Document Mapping) to interact with the database. The database is organized into three main collections, each represented by a Mongoose model:

1. VideoThumbnail Collection (Model: `VideoThumbnail`):
   - `videoID` (String, required): Unique identifier for the video.
   - `thumbnailUrl` (String, required): URL of the video thumbnail image.

2. Product Collection (Model: `Product`):
   - `productID` (String, required): Unique identifier for the product.
   - `link` (String, required): Link to the product.
   - `title` (String, required): Title of the product.
   - `price` (Number, required): Price of the product.

3. Comment Collection (Model: `Comment`):
   - `username` (String, required): Username of the commenter.
   - `comment` (String, required): Comment text.
   - `timestamp` (Date, required): Timestamp when the comment was submitted.
   - `videoID` (String, required): Unique identifier of the video the comment is related to.


## API Structure

The API is built using Node.js and Express.js, with data stored in a MongoDB database using Mongoose. The API provides the following routes:

1. **GET /api/video-thumbnails**
   - Description: Retrieves a list of video thumbnails.
   - Response:
     ```
     [
       {
         "videoID": "fQzD2G-QBK0",
         "thumbnailUrl": "https://img.youtube.com/vi/fQzD2G-QBK0/sddefault.jpg"
       },
       {
         "videoID": "csOCv5poIGQ",
         "thumbnailUrl": "https://img.youtube.com/vi/csOCv5poIGQ/sddefault.jpg"
       },
       ...
     ]
     ```

2. **GET /api/products/:videoID**
   - Description: Retrieves a list of products related to a specific video.
   - Parameters: `videoID` (String) - Unique identifier of the video.
   - Response:
     ```
     [
       {
         "productID": "example_product_id_1",
         "link": "https://example.com/product_1",
         "title": "Example Product 1",
         "price": 250000
       },
       {
         "productID": "example_product_id_2",
         "link": "https://example.com/product_2",
         "title": "Example Product 2",
         "price": 100000
       },
       ...
     ]
     ```

3. **GET /api/comments/:videoID**
   - Description: Retrieves a list of comments related to a specific video.
   - Parameters: `videoID` (String) - Unique identifier of the video.
   - Response:
     ```
     [
       {
         "username": "user1",
         "comment": "This is a great product video!",
         "timestamp": "2023-07-26T12:34:56.789Z"
       },
       {
         "username": "user2",
         "comment": "Thanks for sharing!",
         "timestamp": "2023-07-26T14:12:34.567Z"
       },
       ...
     ]
     ```

4. **POST /api/submit-comment**
   - Description: Submits a comment for a specific video.
   - Payload:
     ```
     {
       "username": "FELTFANS",
       "comment": "Awesome Product!",
       "videoID": "fQzD2G-QBK0"
     }
     ```
   - Response:
     ```
     {
       "Success": "Comment submitted successfully"
     }
     ```

## How to Run Locally

To run the API locally on your machine, follow these steps:

1. Clone the repository:
Run code below on terminal
```
git clone https://github.com/RafiansyahDS/TokpedPlayClone.git
```

2. change directory to the cloned repository:
Run code below on terminal
```
cd TokpedPlayClone
```

3. Install dependencies:
```
npm install body-parser dotenv express mongoose nodemon
```

4. Ensure MongoDB is running on your local machine. check using `mongosh` and make sure the ip and port from DATABASE_URL in .env file is match with the ip and port in "connecting to" section in mongosh, if not copy the ip and port on "connecting to" section with format below to the DATABASE_URL in .env file
```
mongodb://ip:port/tokpedplayclone
```

5. Start the server:
```
npm start
```

6. The API is now running at `http://localhost:3000`.

7. You can use tools like `curl`, `Postman`, or any programming language's HTTP client to make requests to the API endpoints described above.

