import { defineComponent } from 'vue'
import WeatherListItem from './WeatherListItem.js'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherList',

  components: {
    WeatherListItem,
  },

  props: {
    data: {
      type: Array,
      required: true,
    },
  },

  template: `
    <ul class="weather-list unstyled-list">
        <WeatherListItem :weather-item="item" v-for="item in data"/>
    </ul>
  `,
})