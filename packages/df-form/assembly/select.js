
import assembly from './assembly'
export default class MSelect extends assembly {
  constructor(
    type = 'Select',
    name = '下拉框',
    col = 24,
    key = 'Select' + new Date().getTime()
  ) {
    super(type, name, col, key)
    this.showFrom = ['name', 'col', 'key', 'multiple', 'collapseTags', 'placeholder',
      'clearable', 'disabled', 'filterable', 'allowCreate', 'dataType', 'option', 'url',
      'optionLabelKey', 'optionValueKey', 'relatedField'
    ]
    this.multiple = false
    this.collapseTags = false
    this.disabled = false
    this.filterable = false
    this.allowCreate = false
    this.placeholder = '请选择' + this.name
    this.clearable = true
    // 数据类型 option 和 url
    this.dataType = 'option'
    // 请求接口
    this.url = ''
    // 下拉框的选项
    this.option = [{
      value: 'Beijing',
      label: '北京'
    }, {
      value: 'Shanghai',
      label: '上海'
    }, {
      value: 'Tianjin',
      label: '天津'
    }, {
      value: 'ChongQing',
      label: '重庆'
    }]
    // 校验
    this.rules = [
      { required: false, message: '请选择' + this.name, trigger: 'change' }
    ]
    // 请求接口回来数据字段
    this.optionLabelKey = ''
    this.optionValueKey = ''
    // 请求是否关联其他字段值
    this.relatedField = ''
  }

  deleteOption(index) {
    this.option.splice(index, 1)
  }
  addoption() {
    this.option.push({ label: '新的选择', value: 'newValue' })
  }
  deleteRules(index) {
    this.rules.splice(index + 1, 1)
  }
  addRules(data) {
    this.rules.push(data)
  }
}
