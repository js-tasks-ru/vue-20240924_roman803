import { defineComponent, toRef } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      required: true,
    },

    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: Infinity,
    },
  },

  setup(props, { emit }) {
    const count = toRef(() => props.count)

    function handleChange(value) {
      emit('update:count', value)
    }

    return {
      count,
      handleChange,
    }
  },

  template: `
    <div class="counter">
      <UiButton
        aria-label="Decrement"
        :disabled="count === min"
        :count
        @click="handleChange(count - 1)"
      >
        ➖
      </UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton
        aria-label="Increment"
        :disabled="count === max"
        :count
        @click="handleChange(count + 1)"
      >
        ➕
      </UiButton>
    </div>
  `,
})
