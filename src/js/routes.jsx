'use strict';

import React from 'react/addons';
//import { Router, Route, Redirect } from 'react-router';
//import HashHistory from 'react-router/lib/HashHistory';
//import { Link } from 'react-router';
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

import App from './App';
import Posts from './views/Posts';
import SinglePost from './views/Single';
import Profile from './views/Profile';
import UhOh from './views/404';

export default (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute name="index" path="/posts/:pageNum" handler={Posts}/>
        <Route name="posts" path="/posts/:pageNum" handler={ Posts } ignoreScrollBehavior />
        <Route name="post" path="/post/:postId" handler={ SinglePost } />
        <Route name="profile" path="/user/:username" handler={ Profile } />
        <Route name="404" path="/404" handler={ UhOh } />
        {/* Redirects */}
        <Redirect from="/" to="/posts/1" />
        <Redirect from="*" to="/404" />
    </Route>
);
