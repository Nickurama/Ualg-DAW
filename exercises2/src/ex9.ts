type CallCounter = {
	desc: string
	numCalls: number
}

function mySecondPromise(cc: CallCounter): Promise<CallCounter> {
	return new Promise<CallCounter>((resolve, reject) => {
		setTimeout(() => {
			cc.numCalls++;
			resolve({desc: "Ana", numCalls: cc.numCalls});
		}, 1000); // 200 euro payment
	});
}

function myFirstPromise(cc: CallCounter): Promise<CallCounter> {
	return new Promise <CallCounter>((resolve, reject) => {
		setTimeout(() => {
			cc.numCalls++;
			resolve({desc: "Hello ", numCalls: cc.numCalls});
		}, 1000); // simulates some call
	});
}

const myAsync = async(): Promise<CallCounter> => {
	let cc: CallCounter = { desc: "", numCalls: 0 }
	const resp1 = await myFirstPromise(cc)
	const resp2 = await mySecondPromise(cc)
	cc.desc = resp1.desc + resp2.desc
	return cc;
}

myAsync()
	.then((res) => {
		console.log(res.numCalls);
		console.log(res.desc);
	})
	.catch((error) => {
		console.log('NOT OK!')
	});
