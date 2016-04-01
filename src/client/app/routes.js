/// <reference path="../../Scripts/typings/tsd.d.ts" />
"use strict";
var Routes = (function () {
    function Routes() {
        this.musicians = './controllers/musicians';
        this.musiciansController = new MusiciansController();
    }
    Routes.prototype.GetRoutes = function (app) {
        var _this = this;
        app.get('/musicians', function (request, response) { _this.musiciansController.GetAll(request, response); });
        //app.get('/musicians/:id', this.musiciansController.Get(1));
        //app.post('/musicians', this.musiciansController.Add());
        //app.put('/musicians/:id', this.musiciansController.Update());
        //app.delete('/musicians/:id', this.musiciansController.Delete(1));
    };
    return Routes;
}());
exports.Routes = Routes;
var MusiciansController = (function () {
    //routes: Routes
    function MusiciansController() {
        //this.routes = new Routes();
    }
    MusiciansController.prototype.GetAll = function (request, response) {
        console.log('Request... ', request);
        console.log('Response', response);
        response.send([{
                'id': 1,
                'name': 'Max',
                'band': 'Maximum Pain',
                'instrument': 'guitar'
            }]);
    };
    MusiciansController.prototype.Get = function (id) {
    };
    MusiciansController.prototype.Add = function () {
    };
    MusiciansController.prototype.Update = function () {
    };
    MusiciansController.prototype.Delete = function (id) {
    };
    return MusiciansController;
}());
exports.MusiciansController = MusiciansController;
