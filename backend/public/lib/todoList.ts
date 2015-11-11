/**
 * Created by jochen on 29/10/15.
 */
import {Component, View, NgFor} from "angular2/angular2";
import {TodoService} from "./todoService";
import {TodoItemRenderer} from "./todoItemRenderer";
import {StartsWith} from "./startsWith";
import {LetterSelect} from "./letterSelect";
import {TodoSearch} from "./todoSearch";
import {SimpleSearch} from "./simpleSearch";

@Component({
    selector: 'todo-list'
})
@View({
    pipes: [StartsWith, SimpleSearch],
    directives: [NgFor, TodoItemRenderer, LetterSelect, TodoSearch],
    template: `
        <div>
            <todo-search #todo-search></todo-search>
            {{todoSearch.term}}
            <!--todo-item-renderer
                *ng-for="#todo of (todoService.todos
                    | startsWith:'title':letterSelect.selectedLetter)
                    | simpleSearch: ['title', 'action']:todoSearch.term"
                [todo]="todo">
            </todo-item-renderer-->
            <todo-item-renderer
                *ng-for="#todo of todoService.todos
                    | simpleSearch: ['title', 'action']:todoSearch.term"
                [todo]="todo">
            </todo-item-renderer>
            <letter-select #letter-select></letter-select>
        </div>
    `
})
export class TodoList{
    constructor(
        public todoService:TodoService
    ){}
}
