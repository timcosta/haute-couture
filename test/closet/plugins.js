'use strict';

const Loveboat = require('loveboat');
const Vision = require('vision');

const internals = {};

internals.plugin = (srv, options, next) => {

    srv.app.sawPluginOptions = srv.realm.modifiers.route.prefix;
    next();
};

internals.plugin.attributes = { name: 'test-dep' };

module.exports = [
    {
        plugins: [Vision, Loveboat]
    },
    {
        plugins: [internals.plugin],
        options: { routes: { prefix: '/options' } }
    }
];