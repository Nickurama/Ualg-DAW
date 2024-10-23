"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = getAllUsers;
exports.transformationOne = transformationOne;
exports.getSomeUsers = getSomeUsers;
const MAIN_API_URL = "https://jsonplaceholder.typicode.com/users";
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(MAIN_API_URL);
            const data = yield response.json();
            return data;
        }
        catch (error) {
            return "Error inside: getALLUsers()";
        }
    });
}
function transformationOne(element) {
    const myElement = element[1];
    return {
        id: myElement.id,
        name: myElement.name,
        login: myElement.username,
        email: myElement.email.replace(/@[\w+\W+]+/, "gmail.com"),
        address: myElement.address,
        phone: myElement.phone,
        website: myElement.website,
    };
}
function getSomeUsers(city) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(MAIN_API_URL + '/?address.city=' + city);
            const data = response.json();
            return data;
        }
        catch (error) {
            return "Error inside: getSomeUsers()";
        }
    });
}
