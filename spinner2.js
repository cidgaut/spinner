process.stdout.write('hello from spinner1.js... \rheyyy\n');
const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

let delay = 100;

for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  delay += 200;
}