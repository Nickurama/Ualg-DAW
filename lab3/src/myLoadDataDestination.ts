import * as fs from "fs";
import * as util from "util";

export {
	loadDataDestinationOne
}

const writeFilePromised = util.promisify(fs.writeFile);

function loadDataDestinationOne(file: string, content: object) {
	return writeFilePromised(file, JSON.stringify(content));
}
