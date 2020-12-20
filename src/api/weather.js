const config = {
  api: {
    weather: {
      url: "https://api.openweathermap.org/data/2.5",
      apiKey: process.env.WEATHER_API_KEY
    }
  }
};
class Api {
  #getApiUrl;

  constructor(config) {
    if (!Api.instance) {
      this.#getApiUrl = (type, params) => {
        const urlParams = new URLSearchParams(params);
        urlParams.append("appId", config.apiKey);
        return `${config.url}/${type}?${urlParams}`;
      };
      Api.instance = this;
    }
    return Api.instance;
  }

  async oneCallWeatherData(params) {
    return await fetch(this.#getApiUrl("onecall", params));
  }

  async forecastByCity(params) {
    return await fetch(this.#getApiUrl("forecast", params));
  }
}

const weatherApi = new Api(config.api.weather);

export default weatherApi;
