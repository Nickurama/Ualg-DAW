"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const fs = __importStar(require("fs"));
// declare const fetch:any;
// function promisedWrite(writeStream: stream.Stream, text: String) {
// 	return new Promise((resolve, reject) => {
// 		writeStream
// 			.on('finish', resolve)
// 			.on('error', reject);
// 	});
// }
function promisify(stream) {
    return new Promise((resolve, reject) => {
        console.log("1");
        stream.once('close', () => resolve);
        stream.once('error', (error) => reject(error));
    });
}
function getChunks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const decoder = new TextDecoder();
            const writeStream = fs.createWriteStream("result.txt");
            promisify(writeStream).then(() => { console.log("\nDone"); });
            console.log("2");
            // TODO Promisify the writeable stream
            const response = yield fetch("https://jigsaw.w3.org/HTTP/ChunkedScript");
            // we need getReader() to be able to read the chunks from the readable stream
            if (response.body === null) {
                throw new Error("response body was null");
            }
            const reader = response.body.getReader(); // response.body => readable stream; getReader() => method;
            let chunk = yield reader.read();
            let counter = 0;
            while (!chunk.done) { // chunk has "value" of type "buffer"
                counter++;
                console.log("\nchunk: " + counter);
                // await writeStream.write("\nchunk: " + counter + '\n' + decoder.decode(chunk.value)); // decoder parses buffer to ASCII
                yield writeStream.write("\nchunk: " + counter + '\n' + decoder.decode(chunk.value)); // decoder parses buffer to ASCII
                chunk = yield reader.read();
            }
            // await writeStream.write("\nDone");
            // await writeStream.close();
        }
        catch (error) {
            console.error(error);
        }
    });
}
getChunks().then(() => { console.log("Done!!!"); });
