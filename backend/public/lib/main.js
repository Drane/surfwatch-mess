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
var http_1 = require('angular2/http');
var angular2_jwt_1 = require('angular2-jwt/angular2-jwt');
var FirebaseStore_1 = require("./stores/FirebaseStore");
var firebasepipe_1 = require("./pipes/firebasepipe");
var App = (function () {
    function App(/*@Inject(AuthHttp) public authHttp:AuthHttp*/ fb) {
        this.fb = fb;
        this.data = ["test1", "test2"];
        fb.ref.on("value", function (snapshot) {
            //this.data = snapshot.val();
            window.temp = snapshot.val();
            console.log("hier:", snapshot.val());
        });
    }
    App.prototype.doneTyping = function ($event) {
        //$event.preventDefault();
        console.log("App::doneTyping $event.target.value:", $event.target.value);
        if ($event.which === 13) {
            this.addMessage($event.target.value);
            $event.target.value = null;
        }
    };
    App.prototype.addMessage = function (message) {
        this.fb.push(message);
    };
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            directives: [todoInput_1.TodoInput, todoList_1.TodoList, angular2_1.NgFor, angular2_1.NgModel],
            pipes: [firebasepipe_1.FirebaseEventPipe],
            styles: ["\n        .twitter-small {\n            width: 16px;\n            height: 16px;\n            margin-top: 10px;\n            background: url(\"images/Twitter_logo_white_16.png\") no-repeat;\n        }\n    "],
            template: "\n        <div>\n            <!--<div class=\"col s12\">\n                <div class=\"input-field col s6\">-->\n                    <input #email type=\"email\" placeholder=\"email\">\n                    <input #password type=\"password\" placeholder=\"password\">\n                    <button (click)=\"fb.register(email.value, password.value)\">Register</button>\n\n                    <input #login-email type=\"email\" placeholder=\"email\" value=\"jochen.szostek@gmail.com\">\n                    <input #login-password type=\"password\" placeholder=\"password\" value=\"ZpdtaJKJ46PgkyZf\">\n                    <button (click)=\"fb.login.apply(fb, [loginEmail.value, loginPassword.value])\">Login</button>\n                    <!--<label for=\"email\">Email</label>-->\n<!--                </div>\n            </div>\n-->\n            <!--<todo-input></todo-input>\n            <todo-list></todo-list>\n            <button (click)=\"getThing()\">getThing</button>-->\n            <div [hidden]=\"fb.isLoggedIn\">\n                Sign in: <button (click)=\"fb.authWithTwitter()\" >authWithTwitter</button>\n            </div>\n\n            <div [hidden]=\"! fb.isLoggedIn\">\n                <img [src]=\"fb.profileImageURL\" alt=\"profileImageURL\">\n                <button (click)=\"fb.signOut()\" >sign out</button>\n            </div>\n\n\n            <!--<a class=\"waves-effect waves-light btn\"  (click)=\"fb.authWithTwitter()\" [hidden]=\"fb.isLoggedIn\">\n                <i class=\"twitter-small left\"></i>Twitter</a>-->\n\n            <!--<form (ng-submit)=\"onSubmit()\">-->\n                <!--Message: <input type=\"text\" #title (keyup)=\"doneTyping($event)\" placeholder=\"Enter a message...\">-->\n\n            <div id=\"chat-box\" [hidden]=\"! fb.isLoggedIn\">\n                <div class=\"col s12\">\n                    <div class=\"input-field col s6\">\n                      <input id=\"message\" type=\"text\" class=\"validate\" (keyup)=\"doneTyping($event)\">\n                      <label for=\"message\">Message</label>\n                    </div>\n                </div>\n\n                <br/>Messages:\n                <ul>\n                    <li *ng-for=\"#message of fb.firebaseUrl | firebaseevent:'child_added'\">\n                        <strong>{{message.username}}</strong>: {{message.text}}\n                    </li>\n                </ul>\n            </div>\n\n\n                <!--<button type=\"submit\" (click)=\"title.focus()\">Add Todo</button>-->\n            <!--</form>-->\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [FirebaseStore_1.FirebaseStore])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [
    todoService_1.TodoService,
    FirebaseStore_1.FirebaseStore,
    http_1.HTTP_PROVIDERS,
    angular2_1.provide(angular2_jwt_1.AuthHttp, { useFactory: function () {
            console.log("in AuthHttp factory");
            return new angular2_jwt_1.AuthHttp({
                //headerName: "YOUR_HEADER_NAME",
                //headerPrefix: "YOUR_HEADER_PREFIX",
                //tokenName: "YOUR_TOKEN_NAME",
                //tokenGetter: "YOUR_TOKEN_GETTER_FUNCTION",
                noJwtError: true
            });
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
