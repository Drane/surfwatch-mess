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
 * Created by jochen on 11/11/15.
 */
var angular2_1 = require("angular2/angular2");
var todoService_1 = require("./todoService");
var TodoItemRenderer = (function () {
    function TodoItemRenderer() {
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', todoService_1.TodoModel)
    ], TodoItemRenderer.prototype, "todo");
    TodoItemRenderer = __decorate([
        angular2_1.Component({
            selector: 'todo-item-renderer'
        }),
        angular2_1.View({
            /* Emulated (default) => styles from Index.html inherited
               Native => styles from Index.html not inherited
               None => styles set globally, so also for Index.html elements */
            encapsulation: angular2_1.ViewEncapsulation.Emulated,
            directives: [angular2_1.NgClass],
            styles: [("\n        ." + todoService_1.TodoModel.STARTED + "{\n            color: green;\n        }\n        ." + todoService_1.TodoModel.COMPLETED + "{\n            text-decoration: line-through;\n        }\n    ")],
            template: "\n        <div>\n            <!--<span [content-editable]=\"todo.status == 'completed'\">{{todo.title}}</span>-->\n            <span [ng-class]=\"todo.status\">{{todo.title | uppercase}}=>{{todo.action}}</span>\n            <button (click)=\"todo.toggle()\">Toggle</button>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TodoItemRenderer);
    return TodoItemRenderer;
})();
exports.TodoItemRenderer = TodoItemRenderer;
