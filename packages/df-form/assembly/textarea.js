
import assembly from './assembly'
export default class MTextarea extends assembly {
  constructor(
    type = 'Textarea',
    name = '文本域',
    col = 24,
    key = 'Textarea' + new Date().getTime(),
    rows = 2
  ) {
    super(type, name, col, key)
    this.showFrom = ['name', 'col', 'key', 'rows', 'minlength', 'maxlength', 'showWordLimit', 'placeholder',
      'clearable', 'disabled'
    ]
    this.rows = rows
    this.minlength = 0
    this.maxlength = 100
    this.showWordLimit = true
    this.placeholder = '请输入' + this.name
    this.clearable = true
    this.disabled = false
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
