/* eslint-disable @typescript-eslint/camelcase */

const GetTuanStatus_UTF8 = {
  status: 200,
  contentType: 'text/html; charset=utf8',
  body: {
    iRet: 0,
    tuan_status: 1002,
    pin_type: 1,
    errmsg: '',
    active_id: 15544027631449,
    tuan_id: '99999',
    biz_key: 'pingou',
    biz_value: '11551388070559490880',
    tuan_member_count: 2,
    tuan_amount: 1000000,
    active_time_left: 550363971,
    s_short_name: '',
    s_product_describe: '',
    s_product_url: '',
    uiTuanAliveTime: 4,
    active_end_time: 2133999048,
    tuijian_tuan_id: '',
    miandan: 0,
    cannot_buy_code: 0,
    pid: 'ec799e583da6ae69470c7c94ac28e881',
    getTuanStatus_text: {
      checkPayDialog: '',
    },
  },
};

const api: MockAPI = {
  GetTuanStatus_UTF8: ({ location }) => {
    return GetTuanStatus_UTF8;
  },
};

export default api;
