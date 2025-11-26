// timer
const time = +process.argv[2];

setTimeout(() => {
  console.log("Таймер завершён");
}, time * 1000);
