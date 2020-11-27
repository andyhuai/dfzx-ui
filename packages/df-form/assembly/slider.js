
import assembly from './assembly'
export default class MSlider extends assembly {
  constructor(
    type = 'Slider',
    name = '滑块',
    col = 24,
    key = 'Slider' + new Date().getTime()
  ) {
    super(type, name, col, key)
    this.showFrom = ['name', 'col', 'key', 'min', 'max',
      'disabled', 'step', 'showStops', 'showInput', 'range'
    ]
    this.min = 0
    this.max = 100
    this.disabled = false
    this.step = 1
    this.showStops = false
    this.showInput = false
    // 多选
    this.range = false

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
