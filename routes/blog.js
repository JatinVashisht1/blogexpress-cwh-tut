const express = require('express')
const router = express.Router()
const path = require('path')
const blogs = require('../data/blogs')

router.get('/', (req, res)=>{
    res.render('home')
})

router.get('/blogpost/:slug', (req, res)=>{
    console.log(req.params.slug);
    let myblog = blogs.filter((e)=>{
        return e.slug == req.params.slug;
    })
    console.log(myblog);
    // res.sendFile(path.join(__dirname,'../views/blogpage.html'))
    res.render('blogpage',{
        // myblog is an array with one object
        title: myblog[0].title,
        content: myblog[0].content
    })
})

router.get('/blog', (req, res)=>{
    
    // res.send(JSON.stringify(blogs))
    // res.sendFile(path.join(__dirname, '../views/bloghome.html'))
    res.render('bloghome', {
        blogs: blogs
    })
});

module.exports = router