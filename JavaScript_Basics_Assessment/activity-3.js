const names = ['Huey', 'Dewey', 'Louie'];
for (let i = 0; i < 3; i++) {
	names.push(prompt("Please enter a name: "));
}	
for(let i = 0; i < names.length; i++) {
	console.log(names[i]);
}	