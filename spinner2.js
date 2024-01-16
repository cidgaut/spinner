process.stdout.write('hello from spinner1.js... \rheyyy\n');

//refactor logic to remove the repeat setTimeout statements
//prints are different each time, create array, clockwise
const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
//create beginner delay count 
let delay = 100;

//create for loop to plug in setTimeout
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  delay += 200;
}


/*setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

//200 incriments 

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 1500);

//last character is the same as starting for full circle effect
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1700);*/