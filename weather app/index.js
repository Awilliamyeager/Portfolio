const api = {
    key:'ea1ed9f6cc1de89ce620f661012e8464',
    base:"http://api.openweathermap.org/data/2.5/"
}

const buttonPrss = document.querySelector('button')
buttonPrss.addEventListener('click',getA)


function getA() {
    const query = document.getElementById('inp');
    const value = query.value;
    console.log(value);
    getResults(value);
  };

function getResults(query="austin"){
    fetch(`${api.base}weather?q=${query}&units=imperial&AppID=${api.key}`)
    .then(weather => {
        if(weather )
        console.log(weather)
        return weather.json();
    }).then(displayResults);

}



  function displayResults(weather){
    console.log(weather);
    let city = document.querySelector('.loc .city')
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let weatherDisplay = document.querySelector('.loc .weather')
    weatherDisplay.innerText = `${weather.main.feels_like} °F`;
  }