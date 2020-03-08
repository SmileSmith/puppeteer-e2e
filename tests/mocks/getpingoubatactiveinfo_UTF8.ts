/* eslint-disable @typescript-eslint/camelcase */

const getpingoubatactiveinfo_UTF8 = {
  status: 200,
  contentType: 'text/html; charset=utf8',
  body: {
    errmsg: '',
    iRet: 0,
    pingou_info: [
      {
        lefttime: 550363971,
        product_tuan_price: '0',
        s_product_describe: '',
        s_short_name: '',
        sku_id: '44739348104',
        status: 1,
        tuan_member_count: 2,
      },
    ],
  },
};

const api: MockAPI = {
  getpingoubatactiveinfo_UTF8: ({ location }) => {
    return getpingoubatactiveinfo_UTF8;
  },
};

export default api;
