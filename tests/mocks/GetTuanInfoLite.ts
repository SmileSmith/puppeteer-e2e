/* eslint-disable @typescript-eslint/camelcase */

const GetTuanInfoLite = {
  status: 200,
  contentType: 'text/html; charset=utf8',
  body: {
    active_end_time: 2133999048,
    active_flag: 3,
    active_name: '【颜色可定做】浴室免打孔肥皂架强力无痕沥水置物架肥皂盒香皂盒',
    active_time_left: 550428420,
    errmsg: '',
    iRet: 0,
    islogin: 1,
    product_price: '200',
    product_tuan_price: '380',
    status: 1,
    tuan_alive_time: 4,
    tuan_amount: 1000000,
    tuan_info: {
      active_id: '15544027631449',
      active_tuan_type: 0,
      buyCntLimit: 1,
      isJxPlat: 1,
      isJxTuan: 0,
      isNewerSingleTuan: 0,
      isolder: 0,
      newer_tuan_type: 0,
      pgdetail_text: {
        playMethod: '',
        shareDialog: '邀请好友参团',
        skuActiveRule1: '',
        skuActiveRule2: '',
        skuActiveRulePic: '',
        skuNumLimit: '',
      },
      pgdetail_text_createTuan: {
        skuActiveRule1: '',
        skuActiveRule2: '',
        skuActiveRulePic: '',
      },
      platform: 3,
      sku_id: '44739348104',
      status: 7,
      tuan_id: '1558686219180426161',
      tuan_member_count: 2,
      tuan_owner_nickname: '望守天',
      tuan_owner_platform_id: '243736630',
      tuan_owner_wid: '15177671402',
      tuan_real_size: 2,
      tuan_time_left: 0,
      tuan_type: 0,
    },
    tuan_member_list: [
      {
        head_portrait_url:
          'http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCBM0VEiatrSicV7kNyGyuX3eeZzbkPI1rBiatic73tn8kZT5eicGY73ExbefbHI1eAWfTTLfp3YOsiaHSw/132',
        ismaster: 1,
        isyou: 1,
        nick_name: '京喜加油',
        platform_id: '666666',
        wid: '15177671402',
      },
      {
        head_portrait_url: 'https://wq.360buyimg.com/img/pingou-head/150.jpg',
        ismaster: 0,
        isyou: 0,
        nick_name: '云凌可',
        platform_id: '',
        wid: '2',
      },
    ],
  },
};

const tuanStatusCase: { [key in TuanStatus]: any } = {
  'host-ing-active': {
    active_time_left: 550428420,
    tuan_info: {
      tuan_real_size: 1,
      tuan_time_left: 1,
    },
  },
  'host-success-active': {
    active_time_left: 550428420,
    tuan_info: {
      tuan_real_size: 2,
      tuan_time_left: 0,
    },
  },
  'host-more-active': {
    active_time_left: 550428420,
    tuan_info: {
      tuan_real_size: 2,
      tuan_time_left: 1,
    },
  },
  'host-fail-active': {
    active_time_left: 550428420,
    tuan_info: {
      tuan_real_size: 1,
      tuan_time_left: 0,
    },
  },
  'host-ing-inactive': {
    active_time_left: 0,
    tuan_info: {
      tuan_real_size: 1,
      tuan_time_left: 1,
    },
  },
  'host-success-inactive': {
    active_time_left: 0,
    tuan_info: {
      tuan_real_size: 2,
      tuan_time_left: 0,
    },
  },
  'host-more-inactive': {
    active_time_left: 0,
    tuan_info: {
      tuan_real_size: 2,
      tuan_time_left: 1,
    },
  },
  'host-fail-inactive': {
    active_time_left: 0,
    tuan_info: {
      tuan_real_size: 1,
      tuan_time_left: 0,
    },
  },
  'guest-ing-active': {
    active_time_left: 550428420,
    tuan_info: {
      tuan_real_size: 1,
      tuan_time_left: 1,
    },
    tuan_member_list: [
      {
        head_portrait_url:
          'http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCBM0VEiatrSicV7kNyGyuX3eeZzbkPI1rBiatic73tn8kZT5eicGY73ExbefbHI1eAWfTTLfp3YOsiaHSw/132',
        ismaster: 1,
        isyou: 0,
        nick_name: '京喜加油',
        platform_id: '666666',
        wid: '15177671402',
      },
    ],
  },
  'guest-success-active': {
    active_time_left: 550428420,
    tuan_info: {
      tuan_real_size: 2,
      tuan_time_left: 0,
    },
    tuan_member_list: [
      {
        head_portrait_url:
          'http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCBM0VEiatrSicV7kNyGyuX3eeZzbkPI1rBiatic73tn8kZT5eicGY73ExbefbHI1eAWfTTLfp3YOsiaHSw/132',
        ismaster: 1,
        isyou: 0,
        nick_name: '京喜加油',
        platform_id: '666666',
        wid: '15177671402',
      },
    ],
  },
  'guest-more-active': {
    active_time_left: 550428420,
    tuan_info: {
      tuan_real_size: 2,
      tuan_time_left: 1,
    },
    tuan_member_list: [
      {
        head_portrait_url:
          'http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCBM0VEiatrSicV7kNyGyuX3eeZzbkPI1rBiatic73tn8kZT5eicGY73ExbefbHI1eAWfTTLfp3YOsiaHSw/132',
        ismaster: 1,
        isyou: 0,
        nick_name: '京喜加油',
        platform_id: '666666',
        wid: '15177671402',
      },
    ],
  },
  'guest-fail-active': {
    active_time_left: 550428420,
    tuan_info: {
      tuan_real_size: 1,
      tuan_time_left: 0,
    },
    tuan_member_list: [
      {
        head_portrait_url:
          'http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCBM0VEiatrSicV7kNyGyuX3eeZzbkPI1rBiatic73tn8kZT5eicGY73ExbefbHI1eAWfTTLfp3YOsiaHSw/132',
        ismaster: 1,
        isyou: 0,
        nick_name: '京喜加油',
        platform_id: '666666',
        wid: '15177671402',
      },
    ],
  },
  'guest-ing-inactive': {
    active_time_left: 0,
    tuan_info: {
      tuan_real_size: 1,
      tuan_time_left: 1,
    },
    tuan_member_list: [
      {
        head_portrait_url:
          'http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCBM0VEiatrSicV7kNyGyuX3eeZzbkPI1rBiatic73tn8kZT5eicGY73ExbefbHI1eAWfTTLfp3YOsiaHSw/132',
        ismaster: 1,
        isyou: 0,
        nick_name: '京喜加油',
        platform_id: '666666',
        wid: '15177671402',
      },
    ],
  },
  'guest-success-inactive': {
    active_time_left: 0,
    tuan_info: {
      tuan_real_size: 2,
      tuan_time_left: 0,
    },
    tuan_member_list: [
      {
        head_portrait_url:
          'http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCBM0VEiatrSicV7kNyGyuX3eeZzbkPI1rBiatic73tn8kZT5eicGY73ExbefbHI1eAWfTTLfp3YOsiaHSw/132',
        ismaster: 1,
        isyou: 0,
        nick_name: '京喜加油',
        platform_id: '666666',
        wid: '15177671402',
      },
    ],
  },
  'guest-more-inactive': {
    active_time_left: 0,
    tuan_info: {
      tuan_real_size: 2,
      tuan_time_left: 1,
    },
    tuan_member_list: [
      {
        head_portrait_url:
          'http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCBM0VEiatrSicV7kNyGyuX3eeZzbkPI1rBiatic73tn8kZT5eicGY73ExbefbHI1eAWfTTLfp3YOsiaHSw/132',
        ismaster: 1,
        isyou: 0,
        nick_name: '京喜加油',
        platform_id: '666666',
        wid: '15177671402',
      },
    ],
  },
  'guest-fail-inactive': {
    active_time_left: 0,
    tuan_info: {
      tuan_real_size: 1,
      tuan_time_left: 0,
    },
    tuan_member_list: [
      {
        head_portrait_url:
          'http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCBM0VEiatrSicV7kNyGyuX3eeZzbkPI1rBiatic73tn8kZT5eicGY73ExbefbHI1eAWfTTLfp3YOsiaHSw/132',
        ismaster: 1,
        isyou: 0,
        nick_name: '京喜加油',
        platform_id: '666666',
        wid: '15177671402',
      },
    ],
  },
};

const newerTuanCase: { [key in NewerTuan]: any } = {
  'jxTuan-jxEnv-older-isOlder': {
    tuan_info: {
      isJxPlat: 1,
      isJxTuan: 1,
      isolder: 1,
      newer_tuan_type: 2,
      active_tuan_type: 6,
      pgdetail_text: {
        playMethod: '限京喜新用户参团，人满发货（人不满退款）',
        shareDialog: '邀请京喜新用户参团',
        skuActiveRule1: '',
        skuActiveRule2: '',
        skuActiveRulePic: '',
        skuNumLimit: '',
      },
    },
  },
  'jxTuan-jxEnv-older-isNewer': {
    tuan_info: {
      isJxPlat: 1,
      isJxTuan: 1,
      isolder: 0,
      newer_tuan_type: 2,
      active_tuan_type: 6,
      pgdetail_text: {
        playMethod: '限京喜新用户参团，人满发货（人不满退款）',
        shareDialog: '邀请京喜新用户参团',
        skuActiveRule1: '',
        skuActiveRule2: '',
        skuActiveRulePic: '',
        skuNumLimit: '',
      },
    },
  },
  'jxTuan-jxEnv-newer-isOlder': {
    tuan_info: {
      isJxPlat: 1,
      isJxTuan: 1,
      isolder: 1,
      newer_tuan_type: 1,
      active_tuan_type: 5,
      pgdetail_text: {
        playMethod: '限京喜新用户参团，人满发货（人不满退款）',
        shareDialog: '邀请京喜新用户参团',
        skuActiveRule1: '',
        skuActiveRule2: '',
        skuActiveRulePic: '',
        skuNumLimit: '',
      },
    },
  },
  'jxTuan-jxEnv-newer-isNewer': {
    tuan_info: {
      isJxPlat: 1,
      isJxTuan: 1,
      isolder: 0,
      newer_tuan_type: 1,
      active_tuan_type: 5,
      pgdetail_text: {
        playMethod: '限京喜新用户参团，人满发货（人不满退款）',
        shareDialog: '邀请京喜新用户参团',
        skuActiveRule1: '',
        skuActiveRule2: '',
        skuActiveRulePic: '',
        skuNumLimit: '',
      },
    },
  },
  'jxTuan-jdEnv-older-isOlder': {
    tuan_info: {
      isJxPlat: 0,
      isJxTuan: 1,
      isolder: 1,
      newer_tuan_type: 2,
      active_tuan_type: 6,
      pgdetail_text: {
        playMethod: '限京喜新用户参团，人满发货（人不满退款）',
        shareDialog: '邀请京喜新用户参团',
        skuActiveRule1: '',
        skuActiveRule2: '',
        skuActiveRulePic: '',
        skuNumLimit: '',
      },
    },
  },
  'jxTuan-jdEnv-older-isNewer': {
    tuan_info: {
      isJxPlat: 0,
      isJxTuan: 1,
      isolder: 0,
      newer_tuan_type: 2,
      active_tuan_type: 6,
      pgdetail_text: {
        playMethod: '限京喜新用户参团，人满发货（人不满退款）',
        shareDialog: '邀请京喜新用户参团',
        skuActiveRule1: '',
        skuActiveRule2: '',
        skuActiveRulePic: '',
        skuNumLimit: '',
      },
    },
  },
  'jxTuan-jdEnv-newer-isOlder': {
    tuan_info: {
      isJxPlat: 0,
      isJxTuan: 1,
      isolder: 1,
      newer_tuan_type: 1,
      active_tuan_type: 5,
      pgdetail_text: {
        playMethod: '限京喜新用户参团，人满发货（人不满退款）',
        shareDialog: '邀请京喜新用户参团',
        skuActiveRule1: '',
        skuActiveRule2: '',
        skuActiveRulePic: '',
        skuNumLimit: '',
      },
    },
  },
  'jxTuan-jdEnv-newer-isNewer': {
    tuan_info: {
      isJxPlat: 0,
      isJxTuan: 1,
      isolder: 0,
      newer_tuan_type: 1,
      active_tuan_type: 5,
      pgdetail_text: {
        playMethod: '限京喜新用户参团，人满发货（人不满退款）',
        shareDialog: '邀请京喜新用户参团',
        skuActiveRule1: '',
        skuActiveRule2: '',
        skuActiveRulePic: '',
        skuNumLimit: '',
      },
    },
  },
  'jdTuan-jxEnv-older-isOlder': {
    tuan_info: {
      isJxPlat: 1,
      isJxTuan: 0,
      isolder: 1,
      newer_tuan_type: 2,
      active_tuan_type: 6,
      pgdetail_text: {
        playMethod: '限新用户参团，人满发货（人不满退款）',
        shareDialog: '邀请新用户好友参团',
        skuActiveRule1: '',
        skuActiveRule2: '',
        skuActiveRulePic: '',
        skuNumLimit: '',
      },
    },
  },
  'jdTuan-jxEnv-older-isNewer': {
    tuan_info: {
      isJxPlat: 1,
      isJxTuan: 0,
      isolder: 0,
      newer_tuan_type: 2,
      active_tuan_type: 6,
      pgdetail_text: {
        playMethod: '限新用户参团，人满发货（人不满退款）',
        shareDialog: '邀请新用户好友参团',
        skuActiveRule1: '',
        skuActiveRule2: '',
        skuActiveRulePic: '',
        skuNumLimit: '',
      },
    },
  },
  'jdTuan-jxEnv-newer-isOlder': {
    tuan_info: {
      isJxPlat: 1,
      isJxTuan: 0,
      isolder: 1,
      newer_tuan_type: 1,
      active_tuan_type: 5,
      pgdetail_text: {
        playMethod: '限新用户参团，人满发货（人不满退款）',
        shareDialog: '邀请新用户好友参团',
        skuActiveRule1: '',
        skuActiveRule2: '',
        skuActiveRulePic: '',
        skuNumLimit: '',
      },
    },
  },
  'jdTuan-jxEnv-newer-isNewer': {
    tuan_info: {
      isJxPlat: 1,
      isJxTuan: 0,
      isolder: 0,
      newer_tuan_type: 1,
      active_tuan_type: 5,
      pgdetail_text: {
        playMethod: '限新用户参团，人满发货（人不满退款）',
        shareDialog: '邀请新用户好友参团',
        skuActiveRule1: '',
        skuActiveRule2: '',
        skuActiveRulePic: '',
        skuNumLimit: '',
      },
    },
  },
  'jdTuan-jdEnv-older-isOlder': {
    tuan_info: {
      isJxPlat: 0,
      isJxTuan: 0,
      isolder: 1,
      newer_tuan_type: 2,
      active_tuan_type: 6,
      pgdetail_text: {
        playMethod: '限新用户参团，人满发货（人不满退款）',
        shareDialog: '邀请新用户好友参团',
        skuActiveRule1: '',
        skuActiveRule2: '',
        skuActiveRulePic: '',
        skuNumLimit: '',
      },
    },
  },
  'jdTuan-jdEnv-older-isNewer': {
    tuan_info: {
      isJxPlat: 0,
      isJxTuan: 0,
      isolder: 1,
      newer_tuan_type: 1,
      active_tuan_type: 5,
      pgdetail_text: {
        playMethod: '限新用户参团，人满发货（人不满退款）',
        shareDialog: '邀请新用户好友参团',
        skuActiveRule1: '',
        skuActiveRule2: '',
        skuActiveRulePic: '',
        skuNumLimit: '',
      },
    },
  },
  'jdTuan-jdEnv-newer-isOlder': {
    tuan_info: {
      isJxPlat: 0,
      isJxTuan: 0,
      isolder: 1,
      newer_tuan_type: 1,
      active_tuan_type: 5,
      pgdetail_text: {
        playMethod: '限新用户参团，人满发货（人不满退款）',
        shareDialog: '邀请新用户好友参团',
        skuActiveRule1: '',
        skuActiveRule2: '',
        skuActiveRulePic: '',
        skuNumLimit: '',
      },
    },
  },
  'jdTuan-jdEnv-newer-isNewer': {
    tuan_info: {
      isJxPlat: 0,
      isJxTuan: 0,
      isolder: 1,
      newer_tuan_type: 1,
      active_tuan_type: 5,
      pgdetail_text: {
        playMethod: '限新用户参团，人满发货（人不满退款）',
        shareDialog: '邀请新用户好友参团',
        skuActiveRule1: '',
        skuActiveRule2: '',
        skuActiveRulePic: '',
        skuNumLimit: '',
      },
    },
  },
};

const api: MockAPI = {
  GetTuanInfoLite: ({ url }) => {
    const status = (url.searchParams.get('status') as TuanStatus) || 'host-ing-active';
    const extra = tuanStatusCase[status];
    GetTuanInfoLite.body.active_time_left = extra.active_time_left;
    GetTuanInfoLite.body.tuan_info.tuan_real_size = extra.tuan_info.tuan_real_size;
    GetTuanInfoLite.body.tuan_info.tuan_time_left = extra.tuan_info.tuan_time_left;
    GetTuanInfoLite.body.tuan_member_list[0] =
      (extra.tuan_member_list && extra.tuan_member_list[0]) || GetTuanInfoLite.body.tuan_member_list[0];
    const newer = (url.searchParams.get('newer') as NewerTuan) || 'jxTuan-jxEnv-older-isOlder';
    const newerExtra = newerTuanCase[newer];
    GetTuanInfoLite.body.tuan_info.isolder = newerExtra.tuan_info.isolder;
    GetTuanInfoLite.body.tuan_info.isJxPlat = newerExtra.tuan_info.isJxPlat;
    GetTuanInfoLite.body.tuan_info.isJxTuan = newerExtra.tuan_info.isJxTuan;
    GetTuanInfoLite.body.tuan_info.newer_tuan_type = newerExtra.tuan_info.newer_tuan_type;
    GetTuanInfoLite.body.tuan_info.active_tuan_type = newerExtra.tuan_info.active_tuan_type;
    GetTuanInfoLite.body.tuan_info.pgdetail_text = newerExtra.tuan_info.pgdetail_text;
    return GetTuanInfoLite;
  },
};

export default api;
