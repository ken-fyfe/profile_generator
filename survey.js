const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let outputString = '';

rl.question('What\'s your name (nicknames acceptable)? ', (answer2) => {
  rl.question('What\'s an activity you like doing? ', (answer3) => {
    rl.question('What do you listen to while doing that? ', (answer4) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer5) => {
        rl.question('Favourite food at the meal? ', (answer6) => {
          rl.question('Which sport is your absolute favourite? ', (answer7) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer8) => {
              outputString += `${answer2} `;
              outputString += `loves listening to ${answer4} while `;
              outputString += `${answer3}, `;
              outputString += `devouring ${answer6} `;
              outputString += `for ${answer5}, `;
              outputString += `prefers ${answer7} over any other sport, `;
              outputString += `and is amazing at ${answer8}.`;
              console.log(outputString);
              rl.close();
            });
          });
        });
      });
    });
  });
});
