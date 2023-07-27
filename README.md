# MidTerm Project ( Tokopedia Play Clone )

Backend-only web app utilizing Express.js, Mongoose, and MongoDB.

## Installation

#### 1. Clone my repository

```bash
  git clone <repository_url>
  cd <project_directory>
```

#### 2. Install dependencies using package manager

```bash
  npm install
```

#### 3. Run the server

```bash
  npm start
```

> Don't forget to set-up your `.env` file, I have already put `.env.example` for you to use.

## Database Structure

Database consists of four main schemas: `Video`, `User`, `Product`, and `Comment`. Each schema represents a specific entity in the application and defines its fields.

##### 1. **User Schema**:

- This schema represents a user of the application.
- Fields:
  - `username` (String, required): The unique username of the user. It serves as a handle or identifier for the user.
  - `fullname` (String, required): The full name of the user. It stores the user's complete name for identification purposes.
  - `email` (String, required): The email address of the user. It provides a means of communication and login credential.
  - `password` (String, required): The password of the user. It is encrypted for security and used for user authentication.
  - `profilePicture` (String, optional): The URL of the user's profile picture. It holds the location of the user's chosen profile image.

##### 2. **Video Schema**:

- This schema represents a video in the application.
- Fields:
  - `title` (String, required): The title of the video. It provides a concise name for the video content.
  - `description` (String, required): A description of the video. It offers additional context or information about the video's content.
  - `videoUrl` (String, required): The URL of the video. It specifies the location where the video can be accessed or played.
  - `thumbnailUrl` (String, required): The URL of the video's thumbnail image. Thumbnails are small preview images used to represent the video visually.

##### 3. **Product Schema**:

- This schema represents a product associated with a video.
- Fields:
  - `videoId` (String, required): The ID of the video to which the product is linked. It establishes a relationship between the product and its associated video.
  - `title` (String, required): The title of the product. It provides a name or label for the product.
  - `price` (Number, required): The price of the product. It specifies the cost or value of the product.
  - `linkProduct` (String, required): The URL link to the product. It points to the external location where users can purchase or access the product.

##### 4. **Comment Schema**:

- This schema represents a comment made by a user on a specific video.
- Fields:
  - `userId` (String, required): The ID of the user who posted the comment. It links the comment to the user who authored it.
  - `videoId` (String, required): The ID of the video on which the comment is made. It associates the comment with the specific video it refers to.
  - `comment` (String, required): The actual comment text. It contains the user's input or thoughts about the video.
  - `timestamps` (Automatically generated, optional): Represents the creation and update timestamps for the comment. It records when the comment was created and, if applicable, updated.

By defining these schemas, the application can create, retrieve, update, and delete records in the MongoDB database using the Mongoose library. This structure allows for managing video content, user data, associated products, and user comments efficiently in the application.

## API Structure

| Endpoint                | HTTP Method | Description                                         |
| ----------------------- | ----------- | --------------------------------------------------- |
|                         |             |                                                     |
| **Users**               |             |                                                     |
|                         |             |                                                     |
| /users                  | GET         | Retrieve a list of all users.                       |
| /users/:id              | GET         | Retrieve a specific user by their ID.               |
| /users                  | POST        | Create a new user.                                  |
| /users/:id              | PUT         | Update an existing user by their ID.                |
| /users/:id              | DELETE      | Delete a user by their ID.                          |
|                         |             |                                                     |
| **Videos**              |             |                                                     |
|                         |             |                                                     |
| /videos                 | GET         | Retrieve a list of all videos.                      |
| /videos/:id             | GET         | Retrieve a specific video by its ID.                |
| /videos                 | POST        | Create a new video.                                 |
| /videos/:id             | PUT         | Update an existing video by its ID.                 |
| /videos/:id             | DELETE      | Delete a video by its ID.                           |
|                         |             |                                                     |
| **Products**            |             |                                                     |
|                         |             |                                                     |
| /products               | GET         | Retrieve a list of all products.                    |
| /products/product:id    | GET         | Retrieve a specific product by its ID.              |
| /products               | POST        | Create a new product.                               |
| /products/:id           | PUT         | Update an existing product by its ID.               |
| /products/:id           | DELETE      | Delete a product by its ID.                         |
| /products/video:videoId | GET         | Retrieve products associated with a specific video. |
| /products/search/:query | GET         | Search products based on a query.                   |
|                         |             |                                                     |
| **Comments**            |             |                                                     |
|                         |             |                                                     |
| /comments/:videoId      | GET         | Retrieve comments associated with a specific video. |
| /comments               | POST        | Add a new comment to a video.                       |

## API Reference

### Users

#### User Object

```
{
    username: string,
    fullname: string,
    email: string,
    password: string,
    profilePicture: string
}
```

#### Get All Users

##### Request

```http
GET /users
```

##### Response

```
{
  "status": "success",
  "data": [
      {<user_object>},
      {<user_object>},
      {<user_object>}
  ]
}
```

#### Get User By Id

##### Request

```http
GET /users/${id}
```

| URL Params | Type     | Description   |
| :--------- | :------- | :------------ |
| `id`       | `string` | **Required**. |

##### Response

###### 200 OK

```
{
  "status": "success",
  "data": [
      {<user_object>}
  ]
}
```

###### 404 Not Found

```
{
    "status": "error",
    "message": "User Not Found"
}
```

#### Add User

##### Request

```http
POST /users/
```

| Data Params      | Type     | Description   |
| :--------------- | :------- | :------------ |
| `username`       | `string` | **Required**. |
| `fullname`       | `string` | **Required**. |
| `email`          | `string` | **Required**. |
| `password`       | `string` | **Required**. |
| `profilePicture` | `string` | **Optional**. |

##### Response

###### 201 Created

```
{
    "status": "success",
    "data": {<user_object>}
}
```

###### 400 Bad Request

```
{
    "status": "error",
    "message": "Please enter valid data!"
}
```

#### Update User

##### Request

```http
PUT /users/${id}
```

| URL Params | Type     | Description   |
| :--------- | :------- | :------------ |
| `id`       | `string` | **Required**. |

| Data Params      | Type     | Description   |
| :--------------- | :------- | :------------ |
| `username`       | `string` | **Optional**. |
| `fullname`       | `string` | **Optional**. |
| `email`          | `string` | **Optional**. |
| `password`       | `string` | **Optional**. |
| `profilePicture` | `string` | **Optional**. |

##### Response

###### 200 OK

```
{
    "status": "success",
    "data": {<user_object>}
}
```

###### 404 Not Found

```
{
    "status": "error",
    "message": "User Not Found"
}
```

#### Delete User

##### Request

```http
DELETE /users/${id}
```

| URL Params | Type     | Description   |
| :--------- | :------- | :------------ |
| `id`       | `string` | **Required**. |

##### Response

###### 200 OK

```
{
  "status": "success",
  "message": "User deleted"
}
```

###### 404 Not Found

```
{
    "status": "error",
    "message": "User Not Found"
}
```

### Video

#### Video Object

```
{
    title: string,
    description: string,
    videoUrl: string,
    thumbnailUrl: string
}
```

#### Get All Videos

##### Request

```http
GET /videos
```

##### Response

```
{
    status: "success",
    data: [
        {<video_object>}
        {<video_object>}
        {<video_object>}
        ...
    ]
}
```

#### Get Video By ID

##### Request

```http
GET /videos/${id}
```

| URL Params | Type     | Description   |
| :--------- | :------- | :------------ |
| `id`       | `string` | **Required**. |

##### Response

###### 200 OK

```
{
    "status": "success",
    "data": {<video_object>}
}
```

###### 404 Not Found

```
{
    "status": "error",
    "message": "Video Not Found"
}
```

#### Add Video

##### Request

```http
POST /videos/
```

| Data Params    | Type     | Description   |
| :------------- | :------- | :------------ |
| `title`        | `string` | **Required**. |
| `description`  | `string` | **Required**. |
| `videoUrl`     | `string` | **Required**. |
| `thumbnailUrl` | `string` | **Required**. |

##### Response

###### 201 Created

```
{
    "status": "success",
    "data": {<video_object>}
}
```

###### 400 Bad Request

```
{
    "status": "error",
    "message": "Please enter valid data!"
}
```

#### Update Video

##### Request

```http
PUT /videos/${id}
```

| URL Params | Type     | Description   |
| :--------- | :------- | :------------ |
| `id`       | `string` | **Required**. |

| Data Params    | Type     | Description   |
| :------------- | :------- | :------------ |
| `title`        | `string` | **Optional**. |
| `description`  | `string` | **Optional**. |
| `videoUrl`     | `string` | **Optional**. |
| `thumbnailUrl` | `string` | **Optional**. |

##### Response

###### 200 OK

```
{
    "status": "success",
    "data": {<video_object>}
}
```

###### 404 Not Found

```
{
    "status": "error",
    "message": "Video Not Found"
}
```

#### Delete Video

##### Request

```
DELETE /videos/${id}
```

| URL Params | Type     | Description   |
| :--------- | :------- | :------------ |
| `id`       | `string` | **Required**. |

##### Response

###### 200 OK

```
{
    "status": "success",
    "message": "Video deleted"
}
```

###### 400 Bad Request

```
{
    "status": "error",
    "message": "Video has product!"
}
```

###### 404 Not Found

```
{
    "status": "error",
    "message": "Video Not Found"
}
```

### Product

#### Product Object

```
{
    title: string,
    price: number,
    linkProduct: string,
    videoId: string
}
```

#### Get All Products

##### Request

```http
GET /products
```

##### Response

###### 200 OK

```
{
    "status": "success",
    "data": [
        {<product_object>},
        {<product_object>},
        {<product_object>},
        ...
    ]
}
```

#### Get Product By ID

##### Request

```http
GET /products/product${id}
```

| URL Params | Type     | Description   |
| :--------- | :------- | :------------ |
| `id`       | `string` | **Required**. |

##### Response

###### 200 OK

```
{
    "status": "success",
    "data": {<product_object>}
}
```

###### 404 Not Found

```
{
    "status": "error",
    "message": "Product Not Found"
}
```

#### Get Product By Video ID

##### Request

```http
GET /products/video${videoId}
```

| URL Params | Type     | Description   |
| :--------- | :------- | :------------ |
| `videoId`  | `string` | **Required**. |

##### Response

###### 200 OK

```
{
    "status": "success",
    "data": [
        {<product_object>},
        {<product_object>},
        ...
    ]
}
```

###### 404 Not Found

```
{
    "status": "success",
    "message": "Product Not Found"
}
```

#### Add Product

##### Request

```http
POST /products
```

| Data Params   | Type     | Description   |
| :------------ | :------- | :------------ |
| `title`       | `string` | **Required**. |
| `price`       | `number` | **Required**. |
| `linkProduct` | `string` | **Required**. |
| `videoId`     | `string` | **Required**. |

##### Response

###### 201 Created

```
{
    "status": "success",
    "data": {<product_object>}
}
```

###### 400 Bad Request

```
{
    "status": "error",
    "message": "Please enter valid data!"
}
```

#### Update Product

##### Request

```http
PUT /products/${id}
```

| URL Params | Type     | Description   |
| :--------- | :------- | :------------ |
| `id`       | `string` | **Required**. |

| Data Params   | Type     | Description   |
| :------------ | :------- | :------------ |
| `videoId`     | `string` | **Optional**. |
| `title`       | `string` | **Optional**. |
| `price`       | `number` | **Optional**. |
| `linkProduct` | `string` | **Optional**. |

##### Response

###### 200 OK

```
{
    "status": "success",
    "data": {<product_object>}
}
```

###### 404 Not Found

```
{
    "status": "error",
    "message": "Product Not Found"
}
```

#### Delete Product

##### Request

```
DELETE /products/${id}
```

| URL Params | Type     | Description   |
| :--------- | :------- | :------------ |
| `id`       | `string` | **Required**. |

##### Response

###### 200 OK

```
{
    "status": "success",
    "message": "Product deleted"
}
```

###### 404 Not Found

```
{
    "status": "error",
    "message": "Product Not Found"
}
```

#### Search Product

##### Request

```http
GET /products/search/${product.title}
```

| URL Params | Type     | Description   |
| :--------- | :------- | :------------ |
| `string`   | `string` | **Required**. |

##### Response

###### 200 OK

```
{
    "status": "success",
    "data": {<product_object>}
}
```

###### 404 Not Found

```
{
    "status": "success",
    "message": "No products found."
}
```

### Comment

#### Comment Object

```
{
    userId: string,
    videoId: string,
    comment: string,
    createdAt: date,
    updatedAt: date
}
```

#### Add Comment

##### Request

```http
POST /comments
```

| Data Params | Type     | Description   |
| :---------- | :------- | :------------ |
| `userId`    | `string` | **Required**. |
| `videoId`   | `string` | **Required**. |
| `comment`   | `string` | **Required**. |

##### Response

###### 201 Created

```
{
    "status": "success",
    "data": {<comment_object>}
}
```

###### 400 Bad Request

```
{
    "status": "error",
    "message": "Please enter valid data!"
}
```

#### Get Comments By Video ID

##### Request

```http
GET /comments/${videoId}
```

| URL Params | Type     | Description   |
| :--------- | :------- | :------------ |
| `videoId`  | `string` | **Required**. |

##### Response

###### 200 OK

```
{
    "status": "success",
    "data": [
        {<comment_object>},
        {<comment_object>},
        ...
    ]
}
```

###### 404 Not Found

```
{
    "status": "success",
    "message": "Comments Not Found"
}
```
