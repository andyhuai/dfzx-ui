// 左边拖动空闲状态
const LEFT_DRAG_IDLE = '1'
// 左边拖动没有进入中间区域
const LEFT_DRAG_NOT_ENTER_CENTER = '2'
// 左边拖动进入中间区域,没有进入其他表单组件中
const LEFT_DRAG_ENTER_CENTER = '3'
// 左边拖动进入其他组件
const LEFT_DRAG_ENTER_ITEM = '4'

// 中间组件拖动状态默认值
const CENTER_DRAG_IDLE = '1'
// 中间组件拖动没有进入其他组件
const CENTER_DRAG_NOT_ENTER_ITEM = '2'
// 中间组件拖动进入其他组件
const CENTER_DRAG_ENTER_ITEM = '3'

export default {
  LEFT_DRAG_IDLE,
  LEFT_DRAG_NOT_ENTER_CENTER,
  LEFT_DRAG_ENTER_CENTER,
  LEFT_DRAG_ENTER_ITEM,
  CENTER_DRAG_IDLE,
  CENTER_DRAG_ENTER_ITEM,
  CENTER_DRAG_NOT_ENTER_ITEM
}
