import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const firstOperand = ref(null)
    const secondOperand = ref(null)
    const operation = ref(null)

    const result = computed(() => {
      switch(operation.value) {
        case 'sum':
          return firstOperand.value + secondOperand.value
        case 'subtract':
          return firstOperand.value - secondOperand.value
        case 'multiply':
          return firstOperand.value * secondOperand.value
        case 'divide':
          return firstOperand.value / secondOperand.value
        default:
          return 0
      }
    })

    return {
      firstOperand,
      secondOperand,
      operation,
      result,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="firstOperand"/>

      <div class="calculator__operators">
        <label>
          <input type="radio" name="operator" value="sum" v-model="operation"/>➕
        </label>
        <label>
          <input type="radio" name="operator" value="subtract" v-model="operation"/>➖
        </label>
        <label>
          <input type="radio" name="operator" value="multiply" v-model="operation"/>✖
        </label>
        <label>
          <input type="radio" name="operator" value="divide" v-model="operation"/>➗
        </label>
      </div>

      <input type="number" aria-label="Second operand" v-model="secondOperand"/>

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
