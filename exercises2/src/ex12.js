// ...
import { Readable } from "stream";
// ...

const inStream = new Readable ({
	read(size) { // letter is pushed while consumer reads
		this.push(String.fromCharCode(this.currentCharCode++));
		if (this.currentCharCode > 90) {
			this.push(null); // stops
		}
	}
}) ;
inStream.currentCharCode = 65;
inStream.pipe(process.stdout); // screen consumes
