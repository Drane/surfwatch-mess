if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
if (typeof __param !== "function") __param = function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by jochen on 28/10/15.
 */
var angular2_1 = require("angular2/angular2");
var todoInput_1 = require("./todoInput");
var todoService_1 = require("./todoService");
var todoList_1 = require("./todoList");
var http_1 = require('angular2/http');
var angular2_jwt_1 = require('angular2-jwt/angular2-jwt');
var App = (function () {
    function App(authHttp) {
        this.authHttp = authHttp;
    }
    App.prototype.getThing = function () {
        var _this = this;
        console.log("in getThing()", this.authHttp);
        this.authHttp.get('http://example.com/api/thing')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.thing = data; }, function (err) { return console.log(error); }, function () { return console.log('Request Complete'); });
    };
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            directives: [todoInput_1.TodoInput, todoList_1.TodoList],
            template: "\n        <div>\n            <todo-input></todo-input>\n            <todo-list></todo-list>\n            <button (click)=\"getThing()\">getThing</button>\n        </div>\n    "
        }),
        __param(0, angular2_1.Inject(angular2_jwt_1.AuthHttp)), 
        __metadata('design:paramtypes', [(typeof AuthHttp !== 'undefined' && AuthHttp) || Object])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [
    todoService_1.TodoService,
    http_1.HTTP_PROVIDERS,
    angular2_1.provide(angular2_jwt_1.AuthHttp, { useFactory: function () {
            console.log("in AuthHttp factory");
            return new angular2_jwt_1.AuthHttp();
        } })
]);
/*
class App{

    thing: string;

    constructor(public authHttp:AuthHttp){}

    getThing(){
        this.authHttp.get("")
            .map(res => res.json())
            .subscribe(
                data => this.thing = data,
                err => console.error(err),
                () => console.log('Request Complete')
            );
    }

}

// Any component requesting the service will get the same instance
bootstrap(App, [
    TodoService,
    HTTP_PROVIDERS,
        provide(AuthHttp, { useFactory: () => {
            return new AuthHttp()
        }})
    ]);*/
