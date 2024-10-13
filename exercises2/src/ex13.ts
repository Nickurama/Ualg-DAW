import * as fs from "fs"

async function createFile(text: string[]) {
	const file = fs.createWriteStream("./file");
	for (const str of text) {
		file.write(str);
	}
}

const text: string[] = ["hewwo ", "how are you :3", "\n"];
createFile(text);
