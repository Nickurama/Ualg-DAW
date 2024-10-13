export {
	transformationOne
}

interface MyType {
	[key: string]: string;
}

function transformationOne(element: [string, unknown]) {
	const myElement = element[1] as MyType;
	return {
		id: myElement.id,
		name: myElement.name,
		email: myElement.email.replace(/@[\w\W]+/, '@ualg.pt'),
		address: myElement.address,
		website: myElement.website,
	}
}
