import * as fs from 'fs';
import { createReadStream, ReadStream } from 'fs'
async function logChunks ( readable : ReadStream ) { // async iterator when consuming
	for await ( const chunk of readable ) {
		console.log(chunk) ;
} }

const readable: ReadStream = fs.createReadStream('test.txt' , { encoding: 'utf8' });
logChunks(readable) ;
