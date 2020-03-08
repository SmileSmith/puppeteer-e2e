/* eslint-disable @typescript-eslint/camelcase */

const GetTuiJianTuan = {
  status: 200,
  contentType: 'text/html; charset=utf8',
  body: {
    active_id: '0',
    errmsg: '',
    iRet: 0,
    kai_tuan_num: 36582,
    kai_tuan_num2: 126100,
    kaituan_format: '12.6万',
    tuaninfo_list: [
      {
        active_id: '15544027631449',
        platform: 7,
        sku_id: '44739348104',
        status: 1,
        tuan_id: '99999',
        tuan_member_count: 2,
        tuan_owner_nickname: '龙光凤影',
        tuan_owner_platform_id: '',
        tuan_owner_url: 'https://wq.360buyimg.com/img/pingou-head/129.jpg',
        tuan_owner_wid: '1',
        tuan_real_size: 1,
        tuan_time_left: 1,
      },
    ],
  },
};

const api: MockAPI = {
  GetTuiJianTuan: ({ location }) => {
    return GetTuiJianTuan;
  },
};

export default api;
