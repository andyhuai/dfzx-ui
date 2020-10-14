import { DfzxUIComponent, DfzxUIComponentSize } from './component'

/** Button type */
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

/** Button Component */
export declare class DfModal extends DfzxUIComponent {
    /** Button size */
    title: string

    /** Determine whether it's a plain button */
    visible: boolean

    /** Determine whether it's a round button */
    width: string

    /** Determine whether it's loading */
    'show-confirm-button': boolean

    /** Disable the button */
    'show-cancel-button': boolean

    /** Button icon, accepts an icon name of Element icon component */
    'cancel-button-label': string
    'confirm-button-label': string
}
