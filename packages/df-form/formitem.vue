<template>
  <div>
    <el-input
      v-if="item.type==='Input'"
      v-model="forms[item.key]"
      style="width:100%"
      :show-word-limit="item.showWordLimit"
      :minlength="item.minlength"
      :maxlength="item.maxlength"
      :placeholder="item.placeholder"
      :clearable="item.clearable"
      :show-password="item.showPassword"
      :disabled="item.disabled"
      :prefix-icon="item.prefixIcon"
      :suffix-icon="item.suffixIcon"
    >
      <template v-if="item.prepend!==''" slot="prepend">{{ item.prepend }}</template>
      <template v-if="item.append!==''" slot="append">{{ item.append }}</template>
    </el-input>
    <el-input
      v-if="item.type==='Textarea'"
      v-model="forms[item.key]"
      style="width:100%"
      type="textarea"
      :rows="item.rows"
      :show-word-limit="item.showWordLimit"
      :minlength="item.minlength"
      :maxlength="item.maxlength"
      :placeholder="item.placeholder"
      :clearable="item.clearable"
      :disabled="item.disabled"
    />
    <el-input-number
      v-if="item.type==='InputNumber'"
      v-model="forms[item.key]"
      style="width:100%"
      :min="item.min"
      :max="item.max"
      :step="item.step"
      :step-strictly="item.stepStrictly"
      :precision="item.precision"
      :disabled="item.disabled"
      :controls-position="item.controlsPosition"
      :placeholder="item.placeholder"
    />

    <el-select
      v-if="item.type==='Select'"
      v-model="forms[item.key]"
      style="width:100%"
      :placeholder="item.placeholder"
      :multiple="item.multiple"
      :collapse-tags="item.collapseTags"
      :disabled="item.disabled"
      :clearable="item.clearable"
      :filterable="item.filterable"
      :allow-create="item.allowCreate"
    >
      <el-option
        v-for="item2 in item.option"
        :key="item2.value"
        :label="item2.label"
        :value="item2.value"
      >
        <span style="float: left">{{ item2.label }}</span>
        <!-- <span style="float: right; color: #8492a6; font-size: 13px">{{ item2.value }}</span> -->
      </el-option>
    </el-select>

    <el-switch
      v-if="item.type==='Switch'"
      v-model="forms[item.key]"
      style="width:100%"
      :disabled="item.disabled"
      :active-text="item.activeText"
      :inactive-text="item.inactiveText"
      :active-color="item.activeColor"
      :inactive-color="item.inactiveColor"
    />

    <el-slider
      v-if="item.type==='Slider'"
      v-model="forms[item.key]"
      style="width:100%"
      :min="item.min"
      :max="item.max"
      :disabled="item.disabled"
      :step="item.step"
      :show-stops="item.showStops"
      :show-input="item.showInput"
      :range="item.range"
    />

    <el-time-select
      v-if="item.type==='TimeSelect'"
      v-model="forms[item.key]"
      style="width:100%"
      :disabled="item.disabled"
      :clearable="item.clearable"
      :picker-options="item.pickerOptions"
      :placeholder="item.placeholder"
      :prefix-icon="item.prefixIcon"
      value-format="HH:mm:ss"
    />

    <el-time-picker
      v-if="item.type==='Timepicker'"
      v-model="forms[item.key]"
      style="width:100%"
      :disabled="item.disabled"
      :clearable="item.clearable"
      :placeholder="item.placeholder"
      :prefix-icon="item.prefixIcon"
      :is-range="item.isRange"
      :start-placeholder="item.startPlaceholder"
      :end-placeholder="item.endPlaceholder"
      :range-separator="item.rangeSeparator"
      value-format="HH:mm:ss"
    />

    <el-date-picker
      v-if="item.type==='DatePicker' && ( item.dateType === 'date' || item.dateType ==='dates' || item.dateType ==='dateRange')"
      v-model="forms[item.key]"
      style="width:100%"
      :type="item.dateType"
      :placeholder="item.placeholder"
      :clearable="item.clearable"
      :disabled="item.disabled"
      :prefix-icon="item.prefixIcon"
      value-format="yyyy-MM-dd"
      :start-placeholder="item.startPlaceholder"
      :end-placeholder="item.endPlaceholder"
      :range-separator="item.rangeSeparator"
    />
    <el-date-picker
      v-if="item.type ==='DatePicker' && item.dateType === 'week'"
      v-model="forms[item.key]"
      style="width:100%"
      type="week"
      format="yyyy 第 WW 周"
      value-format="yyyy-MM-dd"
      :placeholder="item.placeholder"
      :clearable="item.clearable"
      :disabled="item.disabled"
      :prefix-icon="item.prefixIcon"
      :start-placeholder="item.startPlaceholder"
      :end-placeholder="item.endPlaceholder"
      :range-separator="item.rangeSeparator"
    />
    <el-date-picker
      v-if="item.type==='DatePicker' && ( item.dateType === 'month'|| item.dateType === 'monthRange' ) "
      v-model="forms[item.key]"
      style="width:100%"
      :type="item.dateType"
      :placeholder="item.placeholder"
      :clearable="item.clearable"
      :disabled="item.disabled"
      :prefix-icon="item.prefixIcon"
      value-format="yyyy-MM"
      :start-placeholder="item.startPlaceholder"
      :end-placeholder="item.endPlaceholder"
      :range-separator="item.rangeSeparator"
    />
    <el-date-picker
      v-if="item.type === 'DatePicker' && item.dateType === 'year'"
      v-model="forms[item.key]"
      style="width:100%"
      type="year"
      :placeholder="item.placeholder"
      :clearable="item.clearable"
      :disabled="item.disabled"
      :prefix-icon="item.prefixIcon"
      value-format="yyyy"
      :start-placeholder="item.startPlaceholder"
      :end-placeholder="item.endPlaceholder"
      :range-separator="item.rangeSeparator"
    />
    <el-date-picker
      v-if="item.type==='DatePicker' && (item.dateType === 'datetime' || item.dateType === 'datetimeRange') "
      v-model="forms[item.key]"
      style="width:100%"
      :type="item.dateType"
      :placeholder="item.placeholder"
      :clearable="item.clearable"
      :disabled="item.disabled"
      :prefix-icon="item.prefixIcon"
      value-format="yyyy-MM-dd HH:mm:ss"
      :start-placeholder="item.startPlaceholder"
      :end-placeholder="item.endPlaceholder"
      :range-separator="item.rangeSeparator"
    />

    <el-radio-group
      v-if="item.type==='Radio'"
      v-model="forms[item.key]"
      style="width:100%"
      :disabled="item.disabled"
    >
      <div v-if="item.radioType==='yuan'">
        <el-radio v-for="(item2,index2) in item.option" :key="index2" :label="item2.value">{{ item2.label }}</el-radio>
      </div>
      <div v-if="item.radioType==='button'">
        <el-radio-button v-for="(item2,index2) in item.option" :key="index2" :label="item2.value">{{ item2.label }}</el-radio-button>
      </div>
    </el-radio-group>

    <el-checkbox-group
      v-if="item.type==='Checkbox'"
      v-model="forms[item.key]"
      style="width:100%"
      :disabled="item.disabled"
      :border="item.border"
      :min="item.min"
      :max="item.max"
    >
      <div v-if="item.checkboxType=== 'fang'">
        <el-checkbox v-for="(item2,index2) in item.option" :key="index2" :label="item2.value">{{ item2.label }}</el-checkbox>
      </div>
      <div v-if="item.checkboxType=== 'button'">
        <el-checkbox-button v-for="(item2,index2) in item.option" :key="index2" :label="item2.value">{{ item2.label }}</el-checkbox-button>
      </div>
    </el-checkbox-group>

  </div>
</template>

<script>
export default {
  name: 'FormItem',
  components: {
  },
  props: {
    // 表单对象
    form: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // 表单内的组件对象
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
    }
  },
  computed: {
    forms() {
      return this.form
    }
  },
  watch: {},
  methods: {
  }
}
</script>

<style>

</style>
