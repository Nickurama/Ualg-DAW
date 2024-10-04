// import * as fs from "fs";

fetch('https://jsonplaceholder.typicode.com/users')
	.then((response) => { // we have access to response
		if (response.status === 200)
		{
			console.log('Everything if ok! Status Code : ' + response.status);
			return response.json();
		}
		else
		{
			console.log('Something went wrong... Status Code : ' + response.status);
		}
	})
	.then((response) => {
		console.log(response);
	})
	.catch(function(err) { // we have access to err
		console.log('Fetch Error : ', err);
	}) ;
