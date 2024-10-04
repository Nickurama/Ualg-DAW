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
function mySecondPromise(cc) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cc.numCalls++;
            resolve({ desc: "Ana", numCalls: cc.numCalls });
        }, 1000); // 200 euro payment
    });
}
function myFirstPromise(cc) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cc.numCalls++;
            resolve({ desc: "Hello ", numCalls: cc.numCalls });
        }, 1000); // simulates some call
    });
}
const myAsync = () => __awaiter(void 0, void 0, void 0, function* () {
    let cc = { desc: "", numCalls: 0 };
    const resp1 = yield myFirstPromise(cc);
    const resp2 = yield mySecondPromise(cc);
    cc.desc = resp1.desc + resp2.desc;
    return cc;
});
myAsync()
    .then((res) => {
    console.log(res.numCalls);
    console.log(res.desc);
})
    .catch((error) => {
    console.log('NOT OK!');
});
