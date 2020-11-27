
import assembly from './assembly'
export default class MTimepicker extends assembly {
  constructor(
    type = 'TimeSelect',
    name = '固定时间',
    col = 24,
    key = 'TimeSelect' + new Date().getTime()
  ) {
    super(type, name, col, key)
    this.showFrom = ['name', 'col', 'key', 'disabled', 'placeholder', 'pickerOptions', 'clearable',
      'prefixIcon'
    ]
    this.disabled = false
    this.placeholder = '请输入' + this.name
    this.clearable = false
    this.prefixIcon = 'el-icon-time'

    this.pickerOptions = {
      start: '09:00',
      end: '18:00',
      step: '00:15'
    }

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
