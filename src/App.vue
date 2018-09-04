<template>
  <div id="app">
    <base-table :table-config="config"
                :table-data="tableData"
                :page-size="pageSize"
                :total-num="totalNum"
                :stripe="false"
                :border="true"
                :mutiSelect="true"
                :height="150"
                @tablePageChange="handlePageChange"
                @tableButtonClick="handleTableBtnClick"
                @tableMultiSelectChange="handleMultiSelectChange">
    </base-table>

<<<<<<< HEAD
    <div class="form">
      <base-form :form-config="formConfig"
                 ref="baseform_data">
      </base-form>
      <el-button @click="submit">提交</el-button>
    </div>

=======
>>>>>>> 50cbb6f2861af9470a55f384b86a2575afc942a7
  </div>
</template>

<script>
// 导入组件和配置文件
<<<<<<< HEAD
import { default as baseTable } from '@/components/baseTable/baseTable'
import tableConfig from '@/components/baseTable/index.js'

import { default as baseForm } from '@/components/baseForm/baseForm'
import formConfig from '@/components/baseForm/index.js'

export default {
  components: {
    baseTable,
    baseForm
  },
  data () {
    return {
      // ----------------表格配置部分
=======
import { default as baseTable } from '@/components/baseTable'
import tableConfig from '@/components/index.js'

export default {
  components: {
    baseTable
  },
  data () {
    return {
>>>>>>> 50cbb6f2861af9470a55f384b86a2575afc942a7
      // 配置
      config: tableConfig.config,
      // 数据源
      tableData: [
        {
          id: '100',
          time: '2016-05-04'
        }, {
          id: '101',
          time: '2016-05-04'
        }, {
          id: '102',
          time: '2016-05-01'
        }, {
          id: '103',
          time: '2016-05-03'
        }
      ],
      // 页大小
<<<<<<< HEAD
      pageSize: 10,

      // ---------------表单配置部分
      formConfig: formConfig.config
=======
      pageSize: 10
>>>>>>> 50cbb6f2861af9470a55f384b86a2575afc942a7
    }
  },
  computed: {
    // 总数
    totalNum () {
      return this.tableData.length
    }
  },
  methods: {
    // 切页方法
    handlePageChange (param) {
      console.log(param.pageNum) // 当前页数
      console.log(param.number) // 当前页大小
    },
    // 按钮方法
    handleTableBtnClick (colInfo) {
      // let scope = colInfo.curScope
      let key = colInfo.curKey
      if (key === 'approve') {
        console.log('点击了同意')
      } else if (key === 'disapprove') {
        console.log('点击了不同意')
      }
    },
    // 多选方法
    handleMultiSelectChange (selectIndexs) {

<<<<<<< HEAD
    },
    submit () {
      let formdata = this.$refs.baseform_data.formData // 得到数据源
      console.log(formdata)
=======
>>>>>>> 50cbb6f2861af9470a55f384b86a2575afc942a7
    }
  }
}
</script>

<style>
<<<<<<< HEAD
.form {
  width: 800px;
}
=======
>>>>>>> 50cbb6f2861af9470a55f384b86a2575afc942a7
</style>
