var express = require('express');
var router = express.Router();
var request = require('supertest');
var jwt = require('jsonwebtoken');

//-------------------------------------------------------------------------------------------------------------------------------
// Guillaume - Ignore these next 2 functions as they were work-related. I will remove when I dont need them for work any more...
router.post('/test', function(req, res) {
    req.body.username = req.body.username.toLowerCase();
    res.send(req.body).end();
});

router.get('/decode', function(req, res) {
    var decoded = jwt.decode('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbIlVzZXIiLCJzdG9yZW1hbmFnZXItb3JkZXJpbmctdHJpYWwiLCIyMzI5IiwiYWQiLCJpbmRpdmlkdWFsIl0sInVzZXJuYW1lIjoidm45MiIsImNsaWVudCI6ImluZm9ybS5tb2JpbGUuYXBwcyIsImRldmljZUlkIjoiNkJDOENGQ0UtQzhBRC00QjZBLUI2OUQtQjE5MkI0OEE4Qzc4IiwiZGV2aWNlTmFtZSI6ImlQaG9uZTYsMiIsImRvbWFpbiI6IlRlc2NvR2xvYmFsIiwiaXNzIjoic2VsZiIsImF1ZCI6Imh0dHBzOi8vbGFicy5vY3NldC5uZXQvaW5mb3JtIiwiZXhwIjoxNDQwNzA5MDA4LCJuYmYiOjE0NDA2ODAyMDh9.C53Bf_hURNYT0Ad0S-JZ8KyfgSH21d89Ko9LajUuPEA');
    res.json(decoded).end();
});
//-------------------------------------------------------------------------------------------------------------------------------

module.exports = router;