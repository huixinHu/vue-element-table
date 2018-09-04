export default {
  config: {
    columns: [
      {
        label: '流水号',
        key: 'id',
        width: '150',
        type: 'text',
        hidden: false
      },
      {
        label: '时间',
        key: 'time',
        width: '150',
        type: 'text'
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
    ]
  }
}
