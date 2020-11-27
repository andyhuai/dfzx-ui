
import assembly from './assembly'
export default class MDivider extends assembly {
  constructor(
    type = 'Divider',
    name = '',
    col = 24,
    key = 'Divider' + new Date().getTime()
  ) {
    super(type, name, col, key)
    this.showFrom = ['col', 'text', 'contentPosition'
    ]
    this.text = ''
    this.contentPosition = 'center'
    // this.rules = []
  }
  // deleteRules(index) {
  //   this.rules.splice(index + 1, 1)
  // }
  // addRules(data) {
  //   this.rules.push(data)
  // }
}
