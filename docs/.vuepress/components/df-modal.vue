<template>
    <div>
        <demo-code title="Modal弹出窗" description="基础用法">
            <df-modal
                    title="标题"
                    :show-confirm-button="true"
                    :show-cancel-button="true"
                    cancel-button-label="取消"
                    confirm-button-label="确定"
                    :visible="visible"
                    :ok-loading="okLoading"
                    @on-ok="onOK"
                    @on-cancel="onClose"
                    @closed="closed"
            >
                <div>我是内容</div>
            </df-modal>
            <el-button @click="click">显示弹窗</el-button>
            <pre v-highlightjs slot="codeText" lang="vue">
                <code class="vue">{{code}}</code>
            </pre>
        </demo-code>

        <demo-api title="属性" type="attr" :api-data="apiData"/>
        <demo-api title="方法" type="method" :api-data="methodData"/>
    </div>
</template>

<script>
    import DfModal from '../../../packages/df-modal/DfModal';
    import Vue from 'vue'
    import VueHighlightJS from 'vue-highlightjs';
    import DemoCode from "./demo-code";
    import DemoApi from "./demo-api";
    import { modalCode } from './code/modalCode'

    Vue.use(VueHighlightJS);

    export default {
        components: {
            DemoApi,
            'demo-code': DemoCode,
            DfModal
        },
        methods: {
            click() {
                this.visible = true
            },
            onOK() {
                this.$message.info('点击确定')
                this.okLoading = true
            },
            onClose() {
                this.$message.info('点击取消')
                this.visible = false
            },
            closed() {
                this.$message.info('弹窗关闭完毕了')
                this.okLoading = false
            }
        },
        data() {
            return {
                apiData: [
                    {
                        params: 'visible',
                        describe: '弹窗是否显示,支持sync',
                        type: 'Boolean',
                        optionValue: 'true, false',
                        defaultValue: '-'
                    }, {
                        params: 'title',
                        describe: '弹窗标题',
                        type: 'String',
                        optionValue: '-',
                        defaultValue: '-'
                    }, {
                        params: 'show-confirm-button',
                        describe: '是否显示确定按钮',
                        type: 'Boolean',
                        optionValue: 'true, false',
                        defaultValue: 'true'
                    }, {
                        params: 'show-cancel-button',
                        describe: '是否显示取消按钮',
                        type: 'Boolean',
                        optionValue: 'true, false',
                        defaultValue: 'true'
                    }, {
                        params: 'cancel-button-label',
                        describe: '取消按钮文字',
                        type: 'String',
                        optionValue: '-',
                        defaultValue: '取消'
                    }, {
                        params: 'confirm-button-label',
                        describe: '确定按钮文字',
                        type: 'String',
                        optionValue: '-',
                        defaultValue: '确定'
                    }, {
                        params: 'confirm-button-type',
                        describe: '确定按钮类型',
                        type: 'String',
                        optionValue: 'primary / success / warning / danger / info / text',
                        defaultValue: 'primary'
                    },{
                        params: 'width',
                        describe: '弹窗宽度',
                        type: 'String',
                        optionValue: '例如: 500px,',
                        defaultValue: '600px'
                    }, {
                        params: 'ok-loading',
                        describe: '确定按钮loading状态,在点击确定做网络请求时候可用',
                        type: 'Boolean',
                        optionValue: 'true, false',
                        defaultValue: 'false'
                    }, {
                        params: 'show-close',
                        describe: '是否显示右上角的关闭按钮',
                        type: 'Boolean',
                        optionValue: 'true, false',
                        defaultValue: 'true'
                    }
                ],
                methodData: [
                    {
                        params: 'on-ok',
                        describe: '点击确定按钮回调',
                        cbparams: '()=>{}',
                    }, {
                        params: 'on-cancel',
                        describe: '点击取消按钮回调',
                        cbparams: '()=>{}',
                    }, {
                        params: 'closed',
                        describe: '弹窗完全关闭回调',
                        cbparams: '()=>{}',
                    },{
                        params: 'open',
                        describe: '弹窗打开回调',
                        cbparams: '()=>{}',
                    },{
                        params: 'opened',
                        describe: '弹窗完全打开回调',
                        cbparams: '()=>{}',
                    },
                ],
                visible: false,
                code: modalCode,
                okLoading: false
            }
        }
    }
</script>
