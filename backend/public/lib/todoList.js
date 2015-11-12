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
 * Created by jochen on 29/10/15.
 */
var angular2_1 = require("angular2/angular2");
var todoService_1 = require("./todoService");
var todoItemRenderer_1 = require("./todoItemRenderer");
var startsWith_1 = require("./startsWith");
var letterSelect_1 = require("./letterSelect");
var todoSearch_1 = require("./todoSearch");
var simpleSearch_1 = require("./simpleSearch");
var TodoList = (function () {
    function TodoList(todoService) {
        this.todoService = todoService;
    }
    TodoList = __decorate([
        angular2_1.Component({
            selector: 'todo-list'
        }),
        angular2_1.View({
            pipes: [startsWith_1.StartsWith, simpleSearch_1.SimpleSearch],
            directives: [angular2_1.NgFor, todoItemRenderer_1.TodoItemRenderer, letterSelect_1.LetterSelect, todoSearch_1.TodoSearch],
            template: "\n        <div>\n            <todo-search #todo-search></todo-search>\n            {{todoSearch.term}}\n            <!--todo-item-renderer\n                *ng-for=\"#todo of (todoService.todos\n                    | startsWith:'title':letterSelect.selectedLetter)\n                    | simpleSearch: ['title', 'action']:todoSearch.term\"\n                [todo]=\"todo\">\n            </todo-item-renderer-->\n            <todo-item-renderer\n                *ng-for=\"#todo of todoService.todos\n                    | simpleSearch: ['title', 'action']:todoSearch.term\"\n                [todo]=\"todo\">\n            </todo-item-renderer>\n            <letter-select #letter-select></letter-select>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [todoService_1.TodoService])
    ], TodoList);
    return TodoList;
})();
exports.TodoList = TodoList;
