import {Router} from 'express';

import HomeController from '../Controllers/home.controller'
import IndexController from '../Controllers/indexPage.controller'

const home = Router();

home.get('/', IndexController);
home.get('/home', HomeController);

export default home;