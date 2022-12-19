import express from 'express';
import { userSignup, userLogin } from '../controller/userController.js';
import getProducts from '../controller/product-controller.js';
const Router = express.Router();

Router.post('/signup',userSignup);
Router.post('/login',userLogin)
Router.get('/products', getProducts) 

export default Router;  