function greeter(person: String)
{
	return "Hello " + person;
}

let user : string = "OwO";

let message = greeter(user);
// console.log(message);
let heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);
