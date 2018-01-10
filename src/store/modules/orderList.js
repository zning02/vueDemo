const state = {
  orderList: [],
  params: {}
}

const getters = {
  getOrderList: state => state.orderList
}
const actions = {
  fetchOrderList({
    commit,
    state
  }) {
    var c = [{
        "orderId": "ddj123",
        "product": "数据统计",
        "version": "高级版",
        "period": "1年",
        "buyNum": 2,
        "date": "2016-10-10",
        "amount": "500元"
      },
      {
        "orderId": "yuj583",
        "product": "流量分析",
        "version": "户外版",
        "period": "3个月",
        "buyNum": 1,
        "date": "2016-5-2",
        "amount": "2200元"
      },
      {
        "orderId": "pmd201",
        "product": "广告发布",
        "version": "商铺版",
        "period": "3年",
        "buyNum": 12,
        "date": "2016-8-3",
        "amount": "7890元"
      }
    ];
    commit('changeOrderList', c)
  }
}
const mutations = {
  changeOrderList(state, orderList) {
    state.orderList = orderList;
    console.log('change');
  },
  updateParams(state, {
    key,
    val
  }) {
    state.params[key] = val;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
