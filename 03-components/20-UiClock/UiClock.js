import { ref, defineComponent, watchEffect, onUnmounted } from 'vue'

function getLocalTime() {
  return new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' })
}

export default defineComponent({
  name: 'UiClock',

  setup() {
    const clock = ref(getLocalTime())
    let timerId = null

    onUnmounted(() => clearInterval(timerId))

    watchEffect(() => {
      timerId = setInterval(() => {
        clock.value = getLocalTime()
      }, 1000)
    })

    return {
      clock,
    }
  },

  template: `<div class="clock">{{ clock }}</div>`,
})
