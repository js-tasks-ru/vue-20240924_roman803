import { ref, defineComponent, onUnmounted } from 'vue'

function getLocalTime() {
  return new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' })
}

export default defineComponent({
  name: 'UiClock',

  setup() {
    const clock = ref(getLocalTime())
    const timerId = setInterval(() => {
      clock.value = getLocalTime()
    }, 1000)

    onUnmounted(() => clearInterval(timerId))

    return {
      clock,
    }
  },

  template: `<div class="clock">{{ clock }}</div>`,
})
