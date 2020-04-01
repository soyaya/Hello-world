//alert("hello this is my first encounter with javascript");

//variables
var a= 'firstname';
let b= 'lastname';
//const time ="1 o clock";

//alert(`${a} and ${b}`);

// let firstname, lastname, section,
//  group;

const c = prompt('what is your name')
alert(`my name is ${c}`);

let d= 'do you want to delet this item?'
confirm(d);

//alert to display notification
alert(c +'item deleted');

let fullname, year, DOB, group, session;

fullname  = prompt('what is your fullname?');
group = prompt('whatn group are you?');
session = prompt('what session are you?');
year = parseInt(prompt('what is your date of birth?'));

DOB = new Date().getfullyear() - year;

alert(fullname + ' ' + year + ' ' + DOB + ' ' + group + ' ' + session);
alert( `your name is ${fullname} and was born in ${year}you are ${dob} years old and you are in group ${group} and your are in ${session} sesion`);