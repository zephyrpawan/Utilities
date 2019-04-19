const express = require('express');
const app = express();

// app.use((req, res, next)=>{
//     res.send('Hello from express!');
// });

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS');
});

app.use ('/api/posts',(req, res, next)=>{
   // res.send("This my posts");
const posts = [
    {
        id: "uyhafdouqnb",
        title: "first post",
        content: "this my first post"
    },
    {
        id: "g7dbjkcboiwefnd",
        title: "second post",
        content: "this my second post"
    }
];
   res.status(200).json({
       message: 'posts fetched successfully',
       posts: posts
   });
});

module.exports = app;
