
import assembly from './assembly'
export default class MInputNumber extends assembly {
  constructor(
    type = 'InputNumber',
    name = '计数器',
    col = 24,
    key = 'InputNumber' + new Date().getTime()
  ) {
    super(type, name, col, key)
    this.showFrom = ['name', 'col', 'key', 'min', 'max',
      'step', 'stepStrictly', 'precision', 'disabled', 'controlsPosition', 'placeholder'
    ]
    this.min = 0
    this.max = 10000
    this.step = 1
    this.stepStrictly = false
    this.precision = 1
    this.disabled = false
    this.controlsPosition = 'right'
    this.placeholder = '请输入' + this.name
    // 校验
    this.rules = [
      { required: false, message: '请输入' + this.name, trigger: 'change' }
    ]
  }
  deleteRules(index) {
    this.rules.splice(index + 1, 1)
  }
  addRules(data) {
    this.rules.push(data)
  }
}
