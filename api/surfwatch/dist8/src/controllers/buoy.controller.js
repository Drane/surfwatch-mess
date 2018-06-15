"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
const buoy_repository_1 = require("../repositories/buoy.repository");
const repository_1 = require("@loopback/repository");
let BouyController = class BouyController {
    constructor(buoyRepo) {
        this.buoyRepo = buoyRepo;
    }
    findById(placeName) {
        return this.buoyRepo.findById(placeName);
        // return new Buoy('Oostende', 1, 1,);
    }
};
__decorate([
    rest_1.get('/buoy/{placeName}'),
    __param(0, rest_1.param.path.string('placeName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BouyController.prototype, "findById", null);
BouyController = __decorate([
    __param(0, repository_1.repository(buoy_repository_1.BuoyRepository)),
    __metadata("design:paramtypes", [buoy_repository_1.BuoyRepository])
], BouyController);
exports.BouyController = BouyController;
//# sourceMappingURL=buoy.controller.js.map