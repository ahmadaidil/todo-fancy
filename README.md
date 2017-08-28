# todo-fancy (c) 2017 AAF

## REST API

List of routes:

Route | HTTP | Description
------|------|------------
`/api/auth/signin` | POST | Login
`/api/auth/signup` | POST | Register
`/api/todo/searchId` | GET | Get all todo by userId
`/api/todo/create` | POST | Create a todo
`/api/todo/update/:id` | PUT | Update a todo with a new task name
`/api/todo/updateComplete/:id` | PUT | Update completed/uncompleted todo
`/api/todo/remove/:id` | DELETE | Delete todo

## Usage
With only npm:
```
npm install
npm start
npm run dev
```

Access from localhost via http://localhost:3000 or API via http://localhost:3000/api
