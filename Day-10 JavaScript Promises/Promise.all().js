const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 300);
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 200);
  });
  
  Promise.all([promise1, promise2]).then((res) => {
    console.log(res[0]);
    console.log(res[1]);
  });
  