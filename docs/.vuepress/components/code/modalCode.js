export const modalCode =
    `<template>
        <div>
            <df-modal
                title="标题"
                :show-confirm-button="true"
                :show-cancel-button="true"
                cancel-button-label="取消"
                confirm-button-label="确定"
                :visible="visible"
                :ok-loading="okLoading"
                @onOK="onOK"
                @onCancel="onClose"
                @closed="closed"
            >
                <div>我是内容</div>
            </df-modal>
            <el-button @click="click">显示弹窗</el-button>
        </div>
    </template>
    <script>
        import DfModal from "../../../packages/df-modal/DfModal";
        export default {
        components: {
            DfModal
        },
        methods: {
            click() {
                this.visible = true
            },
            onOK(){
                this.$message.info('点击确定')
                this.okLoading = true
            },
            onClose(){
                this.$message.info('点击取消')
                this.visible = false
            },
            closed(){
                this.$message.info('弹窗关闭完毕了')
                this.okLoading = false
            }
        },
        data() {
            return {
                visible: false,
                okLoading: false
            }
        }
    }
    </script>`
