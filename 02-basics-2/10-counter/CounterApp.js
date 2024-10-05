import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const counterValue = ref(0)

    return {
      counterValue
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="counterValue === 0"
        @click="counterValue = counterValue - 1"
      >➖</button>

      <span class="count" data-testid="count"> {{ counterValue }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="counterValue === 5"
        @click="counterValue = counterValue + 1"
      >➕</button>
    </div>
  `,
})
