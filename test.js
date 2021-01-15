const axios = require('axios');
axios.defaults.baseURL = 'http://localhost:3454';

test('create user', async () => {
  await axios.post('/users/register', {
    username: 'test',
    password: '123456',
  });
});

test('create post', async () => {
  await axios.post('/posts', {
    title: 'test',
    content: 'test content',
  });
});

test('get all posts', async () => {
  await axios.get('/posts/?page=1limit=2');
});
