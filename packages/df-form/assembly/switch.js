
import assembly from './assembly'
export default class MSwitch extends assembly {
  constructor(
    type = 'Switch',
    name = '开关',
    col = 24,
    key = 'Switch' + new Date().getTime()
  ) {
    super(type, name, col, key)
    this.showFrom = ['name', 'col', 'key', 'disabled', 'activeText', 'inactiveText',
      'activeColor', 'inactiveColor'
    ]
    this.disabled = false
    this.activeText = '开'
    this.inactiveText = '关'
    this.activeColor = '#409EFF'
    this.inactiveColor = '#C0CCDA'

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
