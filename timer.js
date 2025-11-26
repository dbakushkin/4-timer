// timer
const hours = +process.argv[2].match(/\d+/) * 60 * 60 * 1000;
const minutes = +process.argv[3].match(/\d+/) * 60 * 1000;
const seconds = +process.argv[4].match(/\d+/) * 1000;
const time = hours + minutes + seconds;

try {
  setTimeout(() => {
    console.log("Таймер завершён");
  }, time);
} catch (error) {
  console.log(error);
}
