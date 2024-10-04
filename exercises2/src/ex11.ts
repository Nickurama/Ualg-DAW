import * as fs from 'fs';
import { createReadStream, ReadStream } from 'fs'

// function logChunks(readable: ReadStream) {
// 	for (const chunk of readable) {
// 		console.log(chunk);
// 	}
// }

async function logChunksCorrect(readable: ReadStream) {
	for await (const chunk of readable) {
		console.log(chunk);
	}
}

const readable: ReadStream = fs.createReadStream('test.txt', {encoding: 'utf8'});
// logChunks(readable);
