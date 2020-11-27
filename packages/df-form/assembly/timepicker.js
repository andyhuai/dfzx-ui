
import assembly from './assembly'
export default class MTimepicker extends assembly {
  constructor(
    type = 'Timepicker',
    name = '任意时间',
    col = 24,
    key = 'Timepicker' + new Date().getTime()
  ) {
    super(type, name, col, key)
    this.showFrom = ['name', 'col', 'key', 'disabled', 'placeholder', 'clearable',
      'prefixIcon', 'isRange', 'startPlaceholder', 'endPlaceholder', 'rangeSeparator'
    ]
    this.disabled = false
    this.placeholder = '请输入' + this.name
    this.clearable = false
    this.prefixIcon = 'el-icon-time'

    this.isRange = false
    this.startPlaceholder = '开始时间'
    this.endPlaceholder = '结束时间'
    this.rangeSeparator = '至'

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
