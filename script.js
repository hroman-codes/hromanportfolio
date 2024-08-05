// console.log('Hello world!')

// declare a variable and assign it a prompt
// put the mail inside the mailbox
// var prompt = prompt('What is your name?');

// display the letter that we saved in the mailbox to the console
// console.log(prompt)

// if (8 > 9) {
//   console.log('Yes 10 is greater than 9');
// } else {
//   console.log('This is false')
// }


var age = prompt('What is your age?');

if (age < 18 && typeof age === "string") {
  alert('You are a minor!');
} else if (age >= 18 && age <= 60) {
  alert('You are an adult!')
} else {
  alert('Dam you are old!')
}