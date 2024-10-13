import * as transformation from "./myTransformations";
import * as ldd from "./myLoadDataDestination";

async function getUsers() {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		const data = await response.json();
		const arr = Object.entries(data).map(transformation.transformationOne);
		// Object.entries will create array with objects [index, data] like [0, data0], [1, data1]...
		// map will apply the function to every element of the array
		await ldd.loadDataDestinationOne("result.txt", arr);
	} catch(error) {
		console.log(error);
	}
}

getUsers();
