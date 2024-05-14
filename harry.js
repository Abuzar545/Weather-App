window.onload=()=>{
  let year=new Date().getFullYear()
  document.getElementById("year").innerText=year
}
const getWeather = (city) => {
  cityName.innerHTML = city;
  var api = "1c6c65b55761b0b34970349fd9d64dda";

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`)
    .then(function (response) {
      console.log(response)
      console.log(response.data.main)
      console.log(response.data.clouds.all)

      feels_like.innerHTML = response.data.main.feels_like;
      humidity.innerHTML = response.data.main.humidity;
      humidity2.innerHTML = response.data.main.humidity;
      pressure.innerHTML = response.data.main.pressure;
      temp.innerHTML = response.data.main.temp;
      temp2.innerHTML = response.data.main.temp;
      temp_max.innerHTML = response.data.main.temp_max;
      temp_min.innerHTML = response.data.main.temp_min;
      wind_deg.innerHTML = response.data.wind.deg;
      wind_speed.innerHTML = response.data.wind.speed;
      wind_speed2.innerHTML = response.data.wind.speed;
      Clouds_all.innerHTML = response.data.clouds.all;
    })
    .catch(function (error) {
      document.querySelector('.location').innerHTML = 'NotValid';
      // alert('Enter valid City name');
      console.log(error)
    })
}
Submit.addEventListener("click", (e) => {
  e.preventDefault()
  getWeather(city.value)
})
getWeather("peshawar")
var api = "1c6c65b55761b0b34970349fd9d64dda";
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=${api}&units=metric`)
  .then(function (response) {
    console.log(response)

    Temp_kara.innerHTML = response.data.main.temp;
    Temp_max_kara.innerHTML = response.data.main.temp_max;
    Temp_min_kara.innerHTML =  response.data.main.temp_min;
    Feels_like_kara.innerHTML = response.data.main.feels_like;
    Humidity_kara.innerHTML = response.data.main.humidity;
    Pressure_kara.innerHTML = response.data.main.pressure;
    wind_deg_kara.innerHTML = response.data.wind.deg;
    wind_speed_kara.innerHTML = response.data.wind.speed;
    
  })
  .catch(function (error) {
    document.querySelector('.location').innerHTML = 'NotValid';
    // alert('Enter valid City name');
    console.log(error)
  })
// lahore section

  var api = "1c6c65b55761b0b34970349fd9d64dda";
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=${api}&units=metric`)
  .then(function (response) {
    console.log(response.data.wind.deg)

    Temp_lah.innerHTML = response.data.main.temp;
    Temp_max_lah.innerHTML = response.data.main.temp_max;
    Temp_min_lah.innerHTML =  response.data.main.temp_min;
    Feels_like_lah.innerHTML = response.data.main.feels_like;
    Humidity_lah.innerHTML = response.data.main.humidity;
    Pressure_lah.innerHTML = response.data.main.pressure;
    wind_deg_lah.innerHTML = response.data.wind.deg;
    wind_speed_lah.innerHTML = response.data.wind.speed;
    
  })
  .catch(function (error) {
    document.querySelector('.location').innerHTML = 'NotValid';
    // alert('Enter valid City name');
    console.log(error)
  })

  // islamabad section
  var api = "1c6c65b55761b0b34970349fd9d64dda";
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=islamabad&appid=${api}&units=metric`)
  .then(function (response) {
    console.log(response.data.wind.deg)

    Temp_isla.innerHTML = response.data.main.temp;
    Temp_max_isla.innerHTML = response.data.main.temp_max;
    Temp_min_isla.innerHTML =  response.data.main.temp_min;
    Feels_like_isla.innerHTML = response.data.main.feels_like;
    Humidity_isla.innerHTML = response.data.main.humidity;
    Pressure_isla.innerHTML = response.data.main.pressure;
    wind_deg_isla.innerHTML = response.data.wind.deg;
    wind_speed_isla.innerHTML = response.data.wind.speed;
    
  })
  .catch(function (error) {
    document.querySelector('.location').innerHTML = 'NotValid';
    // alert('Enter valid City name');
    console.log(error)
  })

  // Mardan section
  var api = "1c6c65b55761b0b34970349fd9d64dda";
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Mardan&appid=${api}&units=metric`)
  .then(function (response) {
    console.log(response.data.wind.deg)

    Temp_mar.innerHTML = response.data.main.temp;
    Temp_max_mar.innerHTML = response.data.main.temp_max;
    Temp_min_mar.innerHTML =  response.data.main.temp_min;
    Feels_like_mar.innerHTML = response.data.main.feels_like;
    Humidity_mar.innerHTML = response.data.main.humidity;
    Pressure_mar.innerHTML = response.data.main.pressure;
    wind_deg_mar.innerHTML = response.data.wind.deg;
    wind_speed_mar.innerHTML = response.data.wind.speed;
    
  })
  .catch(function (error) {
    document.querySelector('.location').innerHTML = 'NotValid';
    // alert('Enter valid City name');
    console.log(error)
  })