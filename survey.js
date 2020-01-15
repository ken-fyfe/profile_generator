const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer1) => {
  rl.question('What\'s your name (nicknames acceptable)? ', (answer2) => {
    rl.question('What\'s an activity you like doing? ', (answer3) => {
      console.log(`Your thoughts of Node JS: ${answer1}`);
      console.log(`Given name: ${answer2}`);
      console.log(`Enjoyed Activity: ${answer3}`);
      rl.close();
    });
  });
});

// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!