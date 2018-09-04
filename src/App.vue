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

  </div>
</template>

<script>
// 导入组件和配置文件
import { default as baseTable } from '@/components/baseTable'
import tableConfig from '@/components/index.js'

export default {
  components: {
    baseTable
  },
  data () {
    return {
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
      pageSize: 10
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

    }
  }
}
</script>

<style>
</style>
