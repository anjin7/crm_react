const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
    {
      'id': 1,
      'image': 'https://placeimg.com/64/64/1',
      'name': 'Hong Gil Dong',
      'birthday': '19961222',
      'gender': 'male',
      'job': 'student'
    },
    {
      'id': 2,
      'image': 'https://placeimg.com/64/64/2',
      'name': 'Lee Do',
      'birthday': '19910515',
      'gender': 'male',
      'job': 'teacher'
    },
    {
      'id': 3,
      'image': 'https://placeimg.com/64/64/3',
      'name': 'Lee Sun Sin',
      'birthday': '19931020',
      'gender': 'male',
      'job': 'programer'
    }
  ])
});

app.listen(port, () => console.log(`Listening on port ${port}`));