/*
Loops - executing a block of code over and over again
-for loop
	- a for loop contains three major parts:
		-initial value
			-creating variable
		-condition 
			-creating the appropriate condition or simply expression to run our loop
		-iteration <finalExpression>
			-decrementation or incrementation based on the condition stated

		syntax:
			for(initialization; expression/condition; iteration<finalExpression>(++/--)){
				block of code
			};
-while loop
-do while
-for in loop
*/

for (let i = 0; i <= 10; i++){
	console.log(i);
};

//each item is ordered
let btsBoyGroup = ['Gab','Lesiree','Marco','Carl','Franco','Gabrielle','Jerome']
console.log(btsBoyGroup);
console.log(btsBoyGroup[3]);
console.log(btsBoyGroup[0]);

console.log(btsBoyGroup.length);

for(let index=0; index < btsBoyGroup.length; index++){
	console.log(btsBoyGroup[index])
};

let x = 1;
while(x <= 5){
	console.log(x);
	x++;
};

let counter = 1
do {
	console.log(counter)
	counter++;
}while (counter <= 5)

let colors = ['red','puple','orange'];
for (let num = 0; num <= colors.length-1;
	num++){
	console.log(colors[num]);
}

for (let num1 in colors){
	console.log(colors[num1])
}

let person = {
	name: 'Carl',
	age: 10,
	country: 'South Korea'
};

for (let property in person){
	console.log(`This person is ${person.name} with the age of ${person.age} and living in ${person.country}.`)
}

for (let i=1; i <= 10; i++){
	console.log(i);
	if(i == 3 || i == 7){
		continue;
	}
	console.log(i);
}
/*
Mini-Activity:


	Create an array with 7 items; all strings.
		-List seven of the places you want to visit someday.
	Log the first item in the console.
	Log the last item in the console.
	Log the total amount of items in the console.
	Create a loop to log all items in the console.
  
  screenshot the code and result and paste in our canvas lecture mini-activity
*/

let wonderfulPlaces = ['Japan','Singapore','Greece','Egypt','Antartica','France','USA'];
console.log(wonderfulPlaces[0]);
console.log(wonderfulPlaces[wonderfulPlaces.length-1]);
console.log("Total wonderful places to visit: ", wonderfulPlaces.length);

for (let i = 0; i < wonderfulPlaces.length; i++){
	console.log(wonderfulPlaces[i]);
}