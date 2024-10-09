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

    icons: {
      type: Object,
      required: true,
    }
  },

  template: `
    <ul class="weather-list unstyled-list">
        <WeatherListItem :weather-item="item" :icons="icons"  v-for="item in data"/>
    </ul>
  `,
})