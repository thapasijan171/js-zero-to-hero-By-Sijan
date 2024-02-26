const engine = {
    // method shorthand, with one argument
    start(adverb) {
      console.log(`The engine starts up ${adverb}...`);
    },  
    // anonymous arrow function expression with no arguments
    sputter: () => {
      console.log('The engine sputters...');
    },
  };
  
  engine.start('noisily');
  engine.sputter();
  