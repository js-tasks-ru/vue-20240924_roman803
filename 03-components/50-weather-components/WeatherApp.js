import { defineComponent, toRef } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import './WeatherApp.css'
import WeatherList from './WeatherList.js'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherList,
  },

  setup() {
    function determineNightOrDay(weatherData) {
      const currentTime = weatherData.current.dt
      if (
        currentTime < weatherData.current.sunset
        && currentTime > weatherData.current.sunrise
      ) {
        return false
      }
    
      return true
    }

    const weatherData = toRef(() => {
      return getWeatherData().map(dataItem => {
        dataItem.icon = WeatherConditionIcons[dataItem.current.weather.id]
        dataItem.isNight = determineNightOrDay(dataItem)

        return dataItem
      })
    })

    return {
      weatherData,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>
      <WeatherList :data="weatherData" />
    </div>
  `,
})
