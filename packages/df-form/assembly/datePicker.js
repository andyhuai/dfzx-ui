
import assembly from './assembly'
export default class MDatePicker extends assembly {
  constructor(
    type = 'DatePicker',
    name = '日期',
    col = 24,
    key = 'DatePicker' + new Date().getTime()
  ) {
    super(type, name, col, key)
    this.showFrom = ['name', 'col', 'key', 'disabled', 'placeholder', 'clearable',
      'prefixIcon', 'dateType', 'startPlaceholder', 'endPlaceholder', 'rangeSeparator'
    ]
    this.placeholder = '请输入' + this.name
    this.clearable = false
    this.disabled = false
    this.prefixIcon = 'el-icon-time'
    this.dateType = 'date'
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
