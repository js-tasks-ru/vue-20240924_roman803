import { defineComponent, createApp } from 'vue'

const DateApp = defineComponent({
  name: 'DateApp',

  setup() {
    const dateOptions = { dateStyle: 'long' }

    function getLocalCurrentDate(options = dateOptions) {
      return new Date().toLocaleDateString(navigator.language, options)
    }

    return {
      getLocalCurrentDate,
    }
  },

  template: '<div>Сегодня {{ getLocalCurrentDate() }}</div>',
})

const dateApp = createApp(DateApp)
const vm = dateApp.mount('#app')
