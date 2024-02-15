# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



<div class="container py-5 h-100">

        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-8 col-lg-6 col-xl-4">

                <div class="card shadow" style="color: #4B515D; border-radius: 35px;">
                    <div class="card-body p-4">

                        <div class="d-flex">
                            <h6 class="flex-grow-1 mb-4"><strong class="text-primary">Weather Forecast</strong></h6>
                        </div>
                        
                        <div class="input-group rounded mb-3">
                            <input type="search" class="form-control rounded me-4 shadow" id="locationInput" placeholder="Enter location" aria-label="Search"
                              aria-describedby="search-addon" />
                            <a href="#!" type="button">
                              <span class="input-group-text border-0 fw-bold me-4 bg-primary shadow" onclick="getRandomCountry()" id="search-addon">
                                Click me!
                              </span>
                            </a>
                          </div>

                        <div id="result">

                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>

</body>

<script>
    const getRandomCountry = async () => {
        //make api call
        try {
            const state = document.getElementById("locationInput").value;

            const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`);

            const allWeather = await weather.json()
            console.log(allWeather);
            const temp = allWeather.main.temp
            const feelsTemp = allWeather.main.feels_like
            const place = allWeather.name
            const country = allWeather.sys.country
            const humidity = allWeather.main.humidity
            const wind = allWeather.wind.speed
            const pressure = allWeather.main.pressure
            const timezone = allWeather.timezone
            console.log(pressure);

            // Your provided timezone offset in seconds (19800 seconds is GMT +05:30)
            const timezoneOffsetInSeconds = timezone;

            // Get the current UTC time in milliseconds
            const currentUTCTime = Date.now();

            // Calculate the local time by adding the timezone offset
            const localTime = new Date(currentUTCTime + timezoneOffsetInSeconds * 1000);

            // Format the date according to the desired format
            const options = {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZoneName: 'short'
            };
            const formattedTime = localTime.toLocaleString('en-US', options);





            result.innerHTML = ` <div class="d-flex flex-column text-center mt-5 mb-4">
                      <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"><strong>${temp}°C</strong></h6>
                      <span class="small" style="color: #868B94">${place}</span>
                    </div>
        
                    <div class="d-flex align-items-center">
                      <div class="flex-grow-1" style="font-size: 1rem;">
                        <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1">Country:-<strong> ${country}</strong>
                          </span></div>
                        <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1">Feels like:- <strong>${feelsTemp}°C </strong></span>
                        </div>
                        <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1">Humidity:- <strong>${humidity}% </strong></span>
                        </div>
                        <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1">Wind:-<strong> ${wind}</strong></span>
                        </div>
                        <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1">Pressure:-<strong> ${pressure}</strong></span>
                        </div>

                      </div>
                      
                      <div>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                          width="100px">
                      </div>
                      
                    </div>
                    <div class="m-3"><i class="far fa-clock fa-fw " style="color: #868B94;"></i> <span class="ms-1"><strong>${formattedTime}</strong></span></div>

            
            `
        }
        catch (err) {
            console.log(err);
        }
    }
</script>

</html>