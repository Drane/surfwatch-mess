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
/**
 * Created by jochen on 28/10/15.
 */
var angular2_1 = require("angular2/angular2");
var todoInput_1 = require("./todoInput");
var todoService_1 = require("./todoService");
var todoList_1 = require("./todoList");
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            directives: [todoInput_1.TodoInput, todoList_1.TodoList],
            template: "\n        <div>\n            <todo-input></todo-input>\n            <todo-list></todo-list>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
// Any component requesting the service will get the same instance
angular2_1.bootstrap(App, [todoService_1.TodoService]);
