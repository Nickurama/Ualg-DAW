declare const fetch: any; // nao queremos ter o trabalho de definir interfaces/types do fetch

const MAIN_API_URL = "https://jsonplaceholder.typicode.com/users";

export async function getAllUsers() {
	try {
		const response = await fetch(MAIN_API_URL);
		const data = await response.json();
		return data;
	} catch (error) {
		return "Error inside: getALLUsers()";
	}
}

interface MyType {
	[key: string]: string;
}

export function transformationOne (element: [string, unknown]) {
	const myElement = element[1] as MyType;
	return {
		id: myElement.id,
		name: myElement.name,
		login: myElement.username,
		email: myElement.email.replace(/@[\w+\W+]+/, "gmail.com"),
		address: myElement.address,
		phone: myElement.phone,
		website: myElement.website,
	};
}

export async function getSomeUsers(city: string) {
	try {
		const response = await fetch(MAIN_API_URL + '/?address.city=' + city);
		const data = response.json();
		return data;
	} catch (error) {
		return "Error inside: getSomeUsers()";
	}
}
