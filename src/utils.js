export const waitTwoSeconds = (a) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(a);
      
    }, 2000);
  });
