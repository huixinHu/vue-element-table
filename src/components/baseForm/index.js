export default {
  config: {
    inline: true, // 是否允许一行显示多个表单项
    labelPosition: 'left',
    labelWidth: '80px',
    colSpan: 10, // 表单项所占宽度，element一行所占宽度是24，
    formItemList: [
      {
        type: 'input', // 必填
        label: '姓名', // 必填
        key: 'name', // 必填
        subType: 'text',
        value: ''
      },
      {
        type: 'select',
        label: '权限',
        key: 'auth',
        options: [
          {
            value: 1,
            label: '成员'
          },
          {
            value: 2,
            label: '管理员'
          },
          {
            value: 3,

            label: '所有者'
          }
        ]
      },
      {
        type: 'input',
        label: '数据场景',
        key: 'desc',
        subType: 'text'
      }
    ]
  }
}
