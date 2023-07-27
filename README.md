# MidTerm Project ( Tokopedia Play Clone )

Backend-only web app utilizing Express.js, Mongoose, and MongoDB.

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

```json
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
