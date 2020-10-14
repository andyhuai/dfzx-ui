import Vue from 'vue'
import { DfModal } from './modal';
export interface InstallationOptions {
    router: any,
}
/** The version of vase-ui */
export const version: string

export function install(vue: typeof Vue, options: InstallationOptions): void

export class Modal extends DfModal { }

