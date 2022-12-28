import chalk from "chalk";
import readlineSync from "readline-sync"
import axios from "axios";
//var   n="\{xb0c}"\xb0f
console.log(chalk.yellow("****************************************************"));
console.log(chalk.magenta("\t\tWELCOME TO WEATHER CLI \t\t"));
console.log(chalk.yellow("***************************************************"));
let namecity = readlineSync.question("enter the city : ");
const apikey = "2675151eccc726b72dab4b4bc1beefa6";
function getweatherData(){
    //console.log(`\t\tname : ${namecity}\t\t`)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${namecity}&appid=${apikey}`)
    .then((res) => {
        console.log(res.data);
        console.log(chalk.blue("temperature in celsius" + (Math.floor((((res.data.main.temp))*1.8 +32)))));
         console.log(chalk.blue("temperature in fahrenheit" + (Math.floor(((res.data.main.temp))*1.8 + 32))));
         console.log(chalk.blue("min temperature in celsius" + (Math.floor(((res.data.main.temp))*1.8 + 32))));
         console.log(chalk.blue("min temperature in fahrenheit" + (Math.floor(((res.data.main.temp))*1.8 + 32))));
         console.log(chalk.blue("max temperature in celsius" + (Math.floor(((res.data.main.temp))*1.8 + 32))));
         console.log(chalk.blue("max temperature in fahrenheit" + (Math.floor(((res.data.main.temp))*1.8 + 32))));
         console.log(res.data.main.humidity);
         console.log(chalk.blue("UST time for sunset" + timeUST(((res.data.sys.sunset)))));
         console.log(chalk.blue("UST time for sunrise" + timeUST(((res.data.sys.sunrise)))));
         console.log(chalk.blue("IST time for sunrise" + timeIST(((res.data.sys.sunrise)))));
         console.log(chalk.blue("IST time for sunset" + timeIST(((res.data.sys.sunrise)))));
         console.log(chalk.blue("IST time for timezone" + timeIST(res.data.timezone)));
    })
    .catch((error) => {
        console.error(error)
    })
}  
 getweatherData()
 function timeUST(time){
    return new Date(time*1000);
 }
 timeUST();
 function timeIST(time){
    let D = new Date()
    let T = D.getTime()
    return new Date((T + time + time)*1000)
 }
timeIST();


//   function temperaturechange (){
//      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${namecity}&appid=${apikey}`)
//      .then((res) => {
//      let temp = res.data.main.temp
//      temp = temp*1.8 + 32;
//   console.log(`\t\t${Math.floor(((res.data.main.temp))*1.8 + 32)}\xb0f\t\t`);
//   })
//   }
//  temperaturechange();
 
// function converttofahrenheit(){
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${namecity}&appid=${apikey}`)
//     .then((res) => {
//         let temp = res.data.main.temp;
//          console.log(`${Math.floor((res.data.main.temp)-273.15)}*c`)

//     })
// }
// converttofahrenheit();

 