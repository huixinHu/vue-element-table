<template>
  <div class="base_Table">
    <!-- 通用表格控件 特殊操作通过插槽传进来-->
    <el-table :data="tableData"
              style="100%"
              v-bind="$attrs"
              :stripe="stripe"
              :border="border"
              :height="height"
              :row-class-name="tableRowClassName"
              @select="handleMultiSelect">
      <el-table-column v-if="mutiSelect"
                       type="selection"
                       width="55">
      </el-table-column>
      <el-table-column v-for="item in tableConfig.columns"
                       :key="item.key"
                       :prop="item.key"
                       :label="item.label"
                       :width="item.width"
                       v-if="!item.hidden">
        <template slot-scope="scope">
          <!-- 文本 -->
          <div class="inline_div"
               v-if="item.type === 'text'">{{scope.row[item.key]}}</div>
          <!-- 按钮 -->
          <div class="inline_div"
               v-if="item.type === 'button'">
            <el-button v-for="bt in item.subitem"
                       :key="bt.key"
                       :type="bt.type"
                       size="small"
                       @click="handelBtnClick(scope, bt.key)">
              {{bt.label}}
            </el-button>
          </div>
        </template>
      </el-table-column>

      <!-- 特殊操作通过插槽传进来 -->
      <slot></slot>
    </el-table>

    <div class="bas_table_pagination">
      <el-pagination @current-change="handleCurrentChange"
                     :current-page.sync="CurrentPage"
                     :page-size="pageSize"
                     layout="total, prev, pager, next"
                     :total="totalNum">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableConfig: {
      type: Object,
      required: true
    },
    tableData: {
      type: Array,
      required: true
    },
    pageSize: {
      type: Number,
      default: 20
    },
    totalNum: {
      type: Number,
      default: 0
    },
    stripe: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    height: {
      type: Number
    },
    mutiSelect: {
      type: Boolean,
      default: false
    }
  },
  inheritAttrs: false,
  data () {
    return {
      CurrentPage: 1,
      selectIndexs: []
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.CurrentPage = parseInt(val)
      var param = {
        pageNum: this.CurrentPage,
        number: this.pageSize
      }
      this.$emit('tablePageChange', param)
    },
    handelBtnClick (scope, key) {
      let data = {
        curScope: scope,
        curKey: key
      }
      this.$emit('tableButtonClick', data)
    },
    tableRowClassName ({row, rowIndex}) {
      row.index = rowIndex
    },
    handleMultiSelect (selection, row) {
      let index = row.index
      let i = 0
      for (; i < this.selectIndexs.length; i++) {
        if (this.selectIndexs[i] === index) {
          this.selectIndexs.splice(i, 1)
          this.$emit('tableMultiSelectChange', this.selectIndexs)
          return
        }
      }
      if (i === this.selectIndexs.length) {
        this.selectIndexs[i] = index
        this.$emit('tableMultiSelectChange', this.selectIndexs)
      }
    }
  }
}
</script>

<style>
.base_Table {
  margin-top: 10px;
}

.base_Table .inline_div {
  display: inline-block;
  margin-right: 10px;
}

.bas_table_pagination {
  height: 30px;
}

.bas_table_pagination .el-pagination {
  margin-top: 10px;
  float: right;
}

.base_Table .el-table__row,
.base_Table tr {
  height: 40px;
}

.base_Table .el-table td,
.base_Table .el-table th {
  padding: 0;
}

.base_Table .el-table thead th {
  background-color: #f0f0f0;
}
</style>
