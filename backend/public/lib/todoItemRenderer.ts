/**
 * Created by jochen on 11/11/15.
 */
import {Component, View, Input, NgClass, ViewEncapsulation} from "angular2/angular2";
import {TodoModel} from "./todoService";

@Component({
    selector: 'todo-item-renderer'
})
@View({
    /* Emulated (default) => styles from Index.html inherited
       Native => styles from Index.html not inherited
       None => styles set globally, so also for Index.html elements */
    encapsulation: ViewEncapsulation.Emulated,
    directives: [NgClass],
    styles: [`
        .${TodoModel.STARTED}{
            color: green;
        }
        .${TodoModel.COMPLETED}{
            text-decoration: line-through;
        }
    `],
    template: `
        <div>
            <!--<span [content-editable]="todo.status == 'completed'">{{todo.title}}</span>-->
            <span [ng-class]="todo.status">{{todo.title | uppercase}}=>{{todo.action}}</span>
            <button (click)="todo.toggle()">Toggle</button>
        </div>
    `
})
export class TodoItemRenderer {
    @Input() todo:TodoModel;
}