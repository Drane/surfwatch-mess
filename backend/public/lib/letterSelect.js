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
var LetterSelect = (function () {
    function LetterSelect() {
        this.letters = ["e", "c", "s"];
        this.selectedLetter = "e";
    }
    LetterSelect = __decorate([
        angular2_1.Component({
            selector: 'letter-select'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, angular2_1.FORM_DIRECTIVES],
            template: "\n    <select [(ng-model)]=\"selectedLetter\">\n        <option *ng-for=\"#letter of letters\">{{letter}}</option>\n    </select>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], LetterSelect);
    return LetterSelect;
})();
exports.LetterSelect = LetterSelect;
