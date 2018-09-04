# vue-element-table

## 封装 table 用法说明

## 一、配置

配置示例：

```javascript
{
  label: '账号名称',
  key: 'groupName',
  width: '150',
  type: 'text',
  hidden: false
},
{
  label: '审批意见',
  key: 'approval',
  type: 'button',
  subitem: [
    {
      label: '同意',
      key: 'approve',
      type: 'text'
    },
    {
      label: '不同意',
      key: 'disapprove',
      type: 'text'
    }
  ]
}
```

| 字段    | 含义                                                                  | 是否必填              |
| ------- | --------------------------------------------------------------------- | --------------------- |
| label   | 列名                                                                  | 必填                  |
| key     | key 值，和表格数据源中对应的字段对应                                  | 必填                  |
| width   | 列宽                                                                  | 非必填                |
| type    | 类型，目前只支持 text 和 button，分别代表文本和按钮（按钮可以有多个） | 必填                  |
| subitem | 子组件配置                                                            | type 为 button 时必填 |
| hidden  | 设置显隐                                                              | 非必填                |

**subitem 配置**

| 字段  | 含义                                                                                       |
| ----- | ------------------------------------------------------------------------------------------ |
| label | 按钮的文字                                                                                 |
| key   | key 值，由于按钮可以有多个，用 key 值区分是哪个按钮                                        |
| type  | 按钮类型：primary / success / warning / danger / info / text 含义见 elementui 文档按钮用法 |

## 二、baseTable.vue

对外暴露属性：

| 参数         | 说明                                                        | 类型    |
| ------------ | ----------------------------------------------------------- | ------- |
| table-config | 表格配置，必填                                              | Object  |
| table-data   | 表格数据源                                                  | Array   |
| page-size    | 分页组件一页大小，默认 20                                   | Number  |
| total-number | 数据总数，默认 0                                            | number  |
| stripe       | 表格是否斑马纹，默认 false，见 elementui 文档对应属性用法   | Boolean |
| border       | 表格是否有边框，默认 true，见 elementui 文档对应属性用法    | Boolean |
| height       | 表格高度，可用于设置固定表头，见 elementui 文档对应属性用法 | Number  |
| mutiSelect   | 是否多选，默认 false，见 elementui 文档对应属性用法         | Boolean |

对外暴露方法：

| 事件                   | 说明                                     | 回调参数                                                                                                        |
| ---------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| tablePageChange        | 切换页面                                 | 页面相关参数 param，param.pageNum:当前页数， param.number:当前页大小                                            |
| tableButtonClick       | 按钮点击                                 | 自定义列内容 param，param.curScope:当前 scope，scope 含义见 elementui 表格文档，param.curKey:当前点击按钮的 key |
| tableMultiSelectChange | 多选表格，切换某一行的选中状态触发的方法 | 当前选中项的 index 数组                                                                                         |

## demo

配置项见“配置示例”

最终效果：
![](https://upload-images.jianshu.io/upload_images/1727123-5e561ad923144201.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

JS 部分代码：

```
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
      // 数据源。通过网络请求动态获取时tableData先设置为空数组
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
    }
  }
}
</script>
```

HTML 部分代码

```html
<template>
  <div id="app">
    <base-table :table-config="config"
                :table-data="tableData"
                :page-size="pageSize"
                :total-num="totalNum"
                :stripe="false"
                :border="true"
                :mutiSelect="false"
                :height="150"
                @tablePageChange="handlePageChange"
                @tableButtonClick="handleTableBtnClick">>
    </base-table>
  </div>
</template>
```
