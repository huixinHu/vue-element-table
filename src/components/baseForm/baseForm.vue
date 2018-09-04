<template>
  <!-- 通用表单 -->
  <div class="base-form-container">
    <el-form :model="formData"
             :label-position="formConfig.labelPosition"
             :label-width="formConfig.labelWidth"
             :inline="formConfig.inline">
      <el-row :gutter="20">
        <el-col :span="formConfig.colSpan"
                v-for="item in formConfig.formItemList"
                :key="item.key">
          <el-form-item :label="item.label">
            <el-input class="base-form-input"
                      v-if="item.type === 'input'"
                      v-model="formData[item.key]"
                      :placeholder="`请输入${item.label}`"
                      :type="item.subType"></el-input>

            <!-- <auto-complete-input v-else-if="item.type === 'autoCompleteInput'" v-model="formData[item.key]"></auto-complete-input> -->

            <el-select v-else-if="item.type === 'select'"
                       v-model="formData[item.key]"
                       :placeholder="`请选择`">
              <el-option v-for="o in item.options"
                         :key="o.value"
                         :label="o.label"
                         :value="o.value">
              </el-option>
            </el-select>

            <el-date-picker v-else-if="item.type === 'datePicker'"
                            v-model="formData[item.key]"
                            :type="item.subType"
                            placeholder="选择日期"
                            :format="item.format"
                            value-format="yyyyMMdd"
                            range-separator="至"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间">
            </el-date-picker>

          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
// import AutoCompleteInput from "../autocompleteinput.vue";

export default {
  // components: {
  //   AutoCompleteInput
  // },
  data () {
    return {
      formData: {}
    }
  },
  props: {
    formConfig: {
      type: Object,
      required: true
    }
  },
  methods: {
    clearData () {
      this.formData = {}
    }
  }
}
</script>

<style>
.base-form-input {
  width: 220px;
}
</style>
