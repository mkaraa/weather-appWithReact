import React from "react";
import Title from "./component/Title";
import Form from "./component/Form";
import Weather from "./component/Weather";


//const API_KEY="68335dc0b61fd69fb67b60d6e9f84373";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }


  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    //This api key is private for everyone, so you have to register www.OpenWheatherMap.com and take and API_KEY
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=68335dc0b61fd69fb67b60d6e9f84373`);


    const data = await api_call.json();
    console.log(data);
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
    else if (city) {
      alert("Please fill the Country  !");
    }
    else if (country) {
      alert("Please fill the City !");
    }
    else {
      alert("Please fill the blanks !");
    }
  }

  render() {

    return (
      //Babel returns it as a valid format
      <div>

        <Title />
        <Form getWeather={this.getWeather} />
        <Weather temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} />

      </div>
    );

  }

};

export default App;
