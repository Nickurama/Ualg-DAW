"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformationOne = transformationOne;
function transformationOne(element) {
    const myElement = element[1];
    return {
        id: myElement.id,
        name: myElement.name,
        email: myElement.email.replace(/@[\w\W]+/, '@ualg.pt'),
        address: myElement.address,
        website: myElement.website,
    };
}
