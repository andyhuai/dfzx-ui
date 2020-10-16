import { DfzxUIComponent } from './component'

/** DfModal Component */
export declare class DfModal extends DfzxUIComponent {
    /** Modal title */
    title: string

    /** 是否显示 */
    visible: boolean

    /** 宽度 */
    width: string

    /** 是否显示确定按钮 */
    'show-confirm-button': boolean

    /** 是否显示取消按钮 */
    'show-cancel-button': boolean

    /** 取消按钮文字t */
    'cancel-button-label': string

    /** 确定按钮文字 **/
    'confirm-button-label': string

    /** 确定loading状态 **/
    'ok-loading': boolean

    /** 是否显示右上角的关闭按钮 **/
    'show-close': boolean
}
