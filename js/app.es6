require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('../css/app.scss');

import {login} from './login';

login('admin', 'wrong');

document.write('Welcome to Big Hair Concerts!!!');


console.log('App loaded');


