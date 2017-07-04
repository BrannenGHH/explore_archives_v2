"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var fs = require("fs");
var RouteManager = (function () {
    //Sets the static routes for the application
    function RouteManager(root) {
        this.router = express.Router;
        this.setroutes(root);
    }
    RouteManager.prototype.setroutes = function (root) {
        this.router.get("/", function (req, res) {
            res.render('index');
        });
        var staticlist = this.retrieveroutes(root);
        for (var i = 0; i < staticlist.length; i++) {
            this.router.get("/" + staticlist[i], function (req, res) {
                res.send(staticlist[i]);
            });
        }
    };
    //Retrieves all the routes in the root directory's html folder
    RouteManager.prototype.retrieveroutes = function (root) {
        return fs.readdirSync(root + "/html/");
    };
    return RouteManager;
}());
