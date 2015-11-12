/**
 * Created by jochen on 28/10/15.
 */
var TodoService = (function () {
    function TodoService() {
        /*todos:string[] = [
            "eat",
            "sleep",
            "code"
        ];*/
        this.todos = [
            new TodoModel("eat", "nom nom"),
            new TodoModel("sleep", "zzzz"),
            new TodoModel("code", "type type")
        ];
    }
    //addTodo(value:any):void {
    TodoService.prototype.addTodo = function (value) {
        this.todos.push(value);
    };
    return TodoService;
})();
exports.TodoService = TodoService;
var TodoModel = (function () {
    function TodoModel(title, action) {
        if (title === void 0) { title = ""; }
        if (action === void 0) { action = ""; }
        this.title = title;
        this.action = action;
        this.status = TodoModel.STARTED;
    }
    TodoModel.prototype.toggle = function () {
        if (this.status == TodoModel.STARTED)
            this.status = TodoModel.COMPLETED;
        else
            this.status = TodoModel.STARTED;
    };
    TodoModel.STARTED = "started";
    TodoModel.COMPLETED = "completed";
    return TodoModel;
})();
exports.TodoModel = TodoModel;
