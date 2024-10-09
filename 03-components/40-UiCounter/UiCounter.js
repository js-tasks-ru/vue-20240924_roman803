import { computed, defineComponent } from 'vue'
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
    },

    max: {
      type: Number,
    },
  },

  setup(props, { emit }) {
    const count = computed(() => props.count)
    const min = computed(() => props.min)
    const max = computed(() => props.max)

    function handleChange(value) {
      emit('update:count', value)
    }

    return {
      count,
      min,
      max,
      handleChange,
    }
  },

  template: `
    <div class="counter">
      <UiButton
        aria-label="Decrement"
        :disabled="count === 0 || count === min"
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
