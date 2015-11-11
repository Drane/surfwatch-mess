/**
 * Created by jochen on 11/11/15.
 */
import {Pipe} from "angular2/angular2";

@Pipe({
    name: 'simpleSearch',
    pure: false // => update every time one of these changes: value, [field, letter] (default pure=true)
})
export class SimpleSearch {
    transform(value, [fields, letter]:[string[], string]){
        //console.log("SimpleSearch:", fields);
        return value.filter((item) =>
            fields.some((field)=>
                item[field].includes(letter)
            ));
    }
}