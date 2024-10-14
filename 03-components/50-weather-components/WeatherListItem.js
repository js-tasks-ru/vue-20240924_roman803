import { defineComponent } from 'vue'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherListItem',

  props: {
    weatherItem: {
      type: Object,
      required: true,
    },
  },

  template: `
    <li class="weather-card" :class="{ 'weather-card--night': weatherItem.isNight }">
      <div class="weather-alert" v-if="weatherItem.alert">
        <span class="weather-alert__icon">⚠️</span>
        <span class="weather-alert__description">
          {{ weatherItem.alert.sender_name + ': ' + weatherItem.alert.description }}
        </span>
      </div>
      <div>
        <h2 class="weather-card__name">
          {{ weatherItem.geographic_name }}
        </h2>
        <div class="weather-card__time">
        {{ weatherItem.current.dt }}
        </div>
      </div>
      <div class="weather-conditions">
        <div class="weather-conditions__icon" :title="weatherItem.current.weather.description">
          {{ weatherItem.icon }}
        </div>
        <div class="weather-conditions__temp">
          {{ (weatherItem.current.temp -  273.15).toFixed(1) + ' °C' }}
        </div>
      </div>
      <div class="weather-details">
        <div class="weather-details__item">
          <div class="weather-details__item-label">Давление, мм рт. ст.</div>
          <div class="weather-details__item-value">
            {{ (weatherItem.current.pressure * .75).toFixed(0) }}
          </div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Влажность, %</div>
          <div class="weather-details__item-value">{{ weatherItem.current.humidity}}</div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Облачность, %</div>
          <div class="weather-details__item-value">{{ weatherItem.current.clouds }}</div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Ветер, м/с</div>
          <div class="weather-details__item-value">{{ weatherItem.current.wind_speed }}</div>
        </div>
      </div>
    </li>
  `,
})