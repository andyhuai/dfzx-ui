
import assembly from './assembly'
export default class MInput extends assembly {
  constructor(
    type = 'Input',
    name = '文本框',
    col = 24,
    key = 'Input' + new Date().getTime()
  ) {
    super(type, name, col, key)
    this.showFrom = ['name', 'col', 'key', 'minlength', 'maxlength', 'showWordLimit', 'placeholder',
      'clearable', 'showPassword', 'disabled', 'prefixIcon', 'suffixIcon', 'prepend', 'append'
    ]
    this.minlength = 0
    this.maxlength = 100
    this.showWordLimit = true
    this.placeholder = '请输入' + this.name
    this.clearable = true
    this.showPassword	 = false
    this.disabled = false
    this.prefixIcon = 'el-icon-edit'
    this.suffixIcon = ''
    this.prepend = ''
    this.append = ''
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
