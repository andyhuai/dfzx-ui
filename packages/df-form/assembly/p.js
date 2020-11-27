
import assembly from './assembly'
export default class MP extends assembly {
  constructor(
    type = 'p',
    name = '',
    col = 24,
    key = 'p' + new Date().getTime()
  ) {
    super(type, name, col, key)
    this.showFrom = ['col', 'text', 'contentPosition', 'fontsize', 'textColor'
    ]
    this.text = '某某表单'
    this.contentPosition = 'center'
    this.fontsize = 18
    this.textColor = '#333'
    // this.rules = [
    // ]
  }
  // deleteRules(index) {
  //   this.rules.splice(index + 1, 1)
  // }
  // addRules(data) {
  //   this.rules.push(data)
  // }
}
