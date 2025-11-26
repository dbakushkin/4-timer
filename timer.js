// timer
const hours = +process.argv[2].match(/\d+/) * 60 * 1000;
const minutes = +process.argv[3].match(/\d+/) * 60 * 1000;
const seconds = +process.argv[4].match(/\d+/) * 1000;
const time = hours + minutes + seconds;
console.log(time);

setTimeout(() => {
  console.log("Таймер завершён");
}, time);
