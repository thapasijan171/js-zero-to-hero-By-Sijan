const executorFn = (resolve, reject) => {
    console.log('The executor function of the promise!');
  };
  
  const promise = new Promise(executorFn);
  