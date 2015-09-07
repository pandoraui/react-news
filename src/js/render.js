'use strict';

import React from 'react/addons';
import Router from 'react-router';
import routes from './routes';

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

document.addEventListener('DOMContentLoaded', function() {
    Router.run(routes,
        function(Handler) {
            React.render(<Handler />, document.getElementById('app'));
        });
});
