const express = require('express');
const router = express.Router();


const UsersController = require('../controller/UserController')
const BlogController = require('../controller/BlogController')

router.post('/login' ,  UsersController.login)
router.post('/signup' ,  UsersController.signup )



router.post('/blog' ,  BlogController.create)
router.get('/blog/:id' ,  BlogController.getbyid)
router.get('/blogs ' , BlogController.getall)
router.get('/blogs/:id' , BlogController.getallbyid)
router.put('/blog/:id' , BlogController.update)
router.delete('/blog/:id' , BlogController.delete)


module.exports = router