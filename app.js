const express = require('express');
const app = express();

// app.use((req, res, next)=>{
//     res.send('Hello from express!');
// });

app.use ('/posts',(req, res, next)=>{
    res.send("This my posts");
});

module.exports = app;