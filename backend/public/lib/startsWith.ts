/**
 * Created by jochen on 11/11/15.
 */
import {Pipe} from "angular2/angular2";

@Pipe({
    name: 'startsWith',
    pure: false // => update every time one of these changes: value, [field, letter] (default pure=true)
})
export class StartsWith {
    transform(value, [field, letter]:[string, string]){
        //console.log("StartsWith:", value);
        return value.filter((item) => item[field].startsWith(letter));
    }
}