const firstBoolStep = true;
const secondBoolStep = true;

function testBothTrue(callback, errorCallback){
	if (!firstBoolStep ){
		errorCallback({name: 'First',message: 'Must be fulfilled'})
	}
	else if (!secondBoolStep){
		errorCallback({name: 'Second',message: 'Previous ok but this one must be fulfilled too'})
	} else {
		callback('First and Second ok!')
	}
}

function testBothTruePromise() {
	return new Promise((resolve, reject) => {
		if (!firstBoolStep)
			reject({name: 'First',message: 'Must be fulfilled'});
		else if (!secondBoolStep)
			reject({name: "Second", message: "Previous ok but this one must be fulfilled too"});
		else
			resolve("First and Second ok!");
	});
}

testBothTrue((message) => {
	console.log('Success: ' + message)
},(error) => {
	console.log('Error: ' + error.name + '->' + error.message)
})

testBothTruePromise()
	.then((message) => { console.log("Success: " + message) } )
	.catch((error) => { console.log("Error: " + error.name + "->" + error.message) }) ;
