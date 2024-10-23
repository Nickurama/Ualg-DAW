import * as fs from "fs";
import * as stream from "stream";

// declare const fetch:any;


// function promisedWrite(writeStream: stream.Stream, text: String) {
// 	return new Promise((resolve, reject) => {
// 		writeStream
// 			.on('finish', resolve)
// 			.on('error', reject);
// 	});
// }

function promisify(stream: stream.Stream) : Promise<void> {
	return new Promise<void> ((resolve, reject) => {
		console.log("1");
		stream.once('close', () => resolve);
		stream.once('error', (error) => reject(error));
	});
}

async function getChunks()
{
	try {
		const decoder = new TextDecoder();
		const writeStream = fs.createWriteStream("result.txt");
		promisify(writeStream).then(() => { console.log("\nDone"); });
		console.log("2");
		// TODO Promisify the writeable stream
		const response = await fetch("https://jigsaw.w3.org/HTTP/ChunkedScript");
		// we need getReader() to be able to read the chunks from the readable stream
		if (response.body === null) {
			throw new Error("response body was null");
		}
		const reader = response.body.getReader(); // response.body => readable stream; getReader() => method;
		let chunk = await reader.read();
		let counter: number = 0;
		while(!chunk.done) { // chunk has "value" of type "buffer"
			counter++;
			console.log("\nchunk: " + counter);
			// await writeStream.write("\nchunk: " + counter + '\n' + decoder.decode(chunk.value)); // decoder parses buffer to ASCII
			// write is async
			await writeStream.write("\nchunk: " + counter + '\n' + decoder.decode(chunk.value)); // decoder parses buffer to ASCII
			chunk = await reader.read();
		}
		// await writeStream.write("\nDone");
		// await writeStream.close();

	} catch (error) {
		console.error(error);
	}
}

getChunks().then(() => { console.log("Done!!!")});
