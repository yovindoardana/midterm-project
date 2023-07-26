# MidTerm Project ( Tokopedia Play Clone )

Backend-only web app utilizing Express.js, Mongoose, and MongoDB.

## API Reference

### Users

#### User Object

```
{
  "username": "string",
  "fullname": "string",
  "email": "string",
  "password": "string",
  "profilePicture": "string"
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

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

##### Response

##### 200 OK

```
{
  "status": "success",
  "data": [
      {<user_object>}
  ]
}
```

##### 404 Not Found

```
{
    "status": "error",
    "message": "User Not Found"
}
```

#### Add User

##### Request

#### Update User

#### Delete User
