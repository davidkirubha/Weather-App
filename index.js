let cityinput=document.getElementById("cityinput");
let searchbtn=document.getElementById("searchbtn");
let weatherResult=document.getElementById("weatherResult");


searchbtn.addEventListener("click",async function(){
    let input=cityinput.value.trim();
    
    console.log(input);
    if(input==""){
       weatherResult.innerText="please enter city name";
    }
        try{

     let apiKey = "edfada31dad951e6ace836f66c5dba6f";
//we have the link in open weather but we have to insert our input using $ .
let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`);
     if(!response.ok){
        throw new Error("weather data not found");
     }
     let data = await response.json();

     let city = data.name;
let temperature = data.main.temp;
let condition = data.weather[0].description;


    weatherResult.innerText =     city + " - " + temperature + "°C - " + condition;
    }
    catch(error){
        weatherResult.innerText=error.message;
    }
    
});
