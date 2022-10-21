const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const PORT = 3002;
const app = express();

app.use(bodyParser.json())

class User {
  constructor(data = {}) {
    this.id = data.id || undefined;
    this.name = data.name;
    this.user_name = data.user_name;
    this.email_address = data.email_address;
    this.phone_number = data.phone_number;
    this.website_url = data.website_url;
  }
}

const users = {};

for(let i = 0; i< 10; i++) {
  users[i] = {
    id: i,
    name: `User${i}`,
    user_name: `Some_User_${i}`,
    email_address: `some_${i}@gmail.com`,
    phone_number: `${i}${i}${i}${i+1}${i+2}${i+1}${i+1}${i+3}${i+3}`,
    website_url: `${i}.example.com`,
  }
}

app.get('/users', (req, res) => {
  console.log(Object.values(users));
  res.json(Object.values(users));
});

app.post('/users', (req, res) => {
  console.log('input request:', req);
  const ids = Object.keys(users);
  const id = [ids.length - 1] + 1;
  const temporalUser = req.body;
  const requiredFields = new User();
  temporalUser.id = id;
  let shallPass = true;
  const keys = Object.keys(requiredFields);
  keys.forEach((key) => {
    if(!temporalUser[key]) {
      shallPass = false;
    }
  });
  if (shallPass) {
    const user = new User(temporalUser);
    users[id] =  user;
    res.status(201);
    res.json(Object.values(users));
  } else {
    res.status(400);
    res.send('empty fields');
  }
  
});

app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  res.json(users[id]);
});

app.patch('/user/:id', (req, res) => {
  const id = req.params.id;
  Object.assign(users[id], req.body);
  res.send('success');
})

app.delete('/user/:id', (req, res) => {
  const id = req.params.id;
  delete users[id];
  res.send('Removed');
})

app.listen(PORT, () => {
  console.log('started');
});