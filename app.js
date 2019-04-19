const express = require('express');
const bodyParser = require("body-parser");

const app = express();

// app.use((req, res, next)=>{
//     res.send('Hello from express!');
// });

app.use(bodyParsor.json());
//app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS');

    next();
});

//npm install --save body-parser to parse and extract incoming request data
app.post("/api/posts", (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'post added successfully'
    });
});

app.get('/api/posts',(req, res, next)=>{
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
        content: "Dis my second post"
    }
];
   res.status(200).json({
       message: 'posts fetched successfully',
       posts: posts
   });
});

module.exports = app;