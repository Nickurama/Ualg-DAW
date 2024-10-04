let p = new Promise ((resolve, reject) => {
	let a = 2 // CHANGE ME
	if (a == 2) {
		resolve('Success')
	} else {
		reject('Failed')
	}
})

p.then((message) => {
	console.log (message + '...is inside then')
}).catch ((message) => {
	console.log (message + '...is inside catch')
})
