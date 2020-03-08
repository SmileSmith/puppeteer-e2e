export const DOMAIN = 'https://wqs.jd.com';

export const PGDetailUrl =
  DOMAIN + '/pingou/detail.shtml?sku=44739348104&activeid=15544027631449&tuanid=1558686219180426161';

// 京喜App 2.0 安卓
export const JXAppUA =
  'jdpingou;android;2.0;5.0.1;869511021531997-98e7f57ed6d0;network/wifi;model/HUAWEI GRA-TL00;appBuild/1;;;Mozilla/5.0 (Linux; Android 5.0.1; HUAWEI GRA-TL00 Build/HUAWEIGRA-TL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044504 Mobile Safari/537.36';

// 京东App 7.8 安卓
export const JDAppUA =
  'jdapp;android;7.0;5.0.1;869511021531997-98e7f57ed6d0;network/wifi;model/HUAWEI GRA-TL00;appBuild/1;;;Mozilla/5.0 (Linux; Android 5.0.1; HUAWEI GRA-TL00 Build/HUAWEIGRA-TL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044504 Mobile Safari/537.36';

// M站 IOS
export const MMUA =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';

// 微信环境 IOS
export const WXH5UA =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile MQQBrowser/6.8 TBS/036887 Safari/537.36 MicroMessenger/6.3.31.921 NetType/WIFI Language/zh_CN';

// 手Q IOS
export const QQH5UA =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 QQ/8.0.0.472 V1_IPH_SQ_8.0.0_1_APP_A Pixel/1242 Core/WKWebView Device/Apple(iPhone XS Max) NetType/WIFI QBWebViewType/1 WKType/1';

// 所有环境
export const envList: Env[] = [
  {
    key: 'jx',
    ua: JXAppUA,
  },
  {
    key: 'jd',
    ua: JDAppUA,
  },
  {
    key: 'wx',
    ua: WXH5UA,
  },
  {
    key: 'qq',
    ua: QQH5UA,
  },
  {
    key: 'm',
    ua: MMUA,
  },
];

// 所有团状态
export const statusList: Status[] = [
  { key: 'host-ing-active', name: '主态-拼购中-活动在线' },
  { key: 'host-success-active', name: '主态-成功-活动在线' },
  { key: 'host-more-active', name: '主态-挤爆-活动在线' },
  { key: 'host-fail-active', name: '主态-失败-活动在线' },
  { key: 'host-ing-inactive', name: '主态-拼购中-活动下线' },
  { key: 'host-success-inactive', name: '主态-成功-活动下线' },
  { key: 'host-more-inactive', name: '主态-挤爆-活动下线' },
  { key: 'host-fail-inactive', name: '主态-失败-活动下线' },
  { key: 'guest-ing-active', name: '客态-拼购中-活动在线' },
  { key: 'guest-success-active', name: '客态-成功-活动在线' },
  { key: 'guest-more-active', name: '客态-挤爆-活动在线' },
  { key: 'guest-fail-active', name: '客态-失败-活动在线' },
  { key: 'guest-ing-inactive', name: '客态-拼购中-活动下线' },
  { key: 'guest-success-inactive', name: '客态-成功-活动下线' },
  { key: 'guest-more-inactive', name: '客态-挤爆-活动下线' },
  { key: 'guest-fail-inactive', name: '客态-失败-活动下线' },
];

// 所有新人团
export const newerTuanList: Newer[] = [
  { key: 'jxTuan-jxEnv-older-isOlder', name: '京喜新团-京喜新渠道-老拉新-老用户' },
  { key: 'jxTuan-jxEnv-older-isNewer', name: '京喜新团-京喜新渠道-老拉新-新用户' },
  { key: 'jxTuan-jxEnv-newer-isOlder', name: '京喜新团-京喜新渠道-新拉新-老用户' },
  { key: 'jxTuan-jxEnv-newer-isNewer', name: '京喜新团-京喜新渠道-新拉新-新用户' },
  { key: 'jxTuan-jdEnv-older-isOlder', name: '京喜新团-京东新渠道-老拉新-老用户' },
  { key: 'jxTuan-jdEnv-older-isNewer', name: '京喜新团-京东新渠道-老拉新-新用户' },
  { key: 'jxTuan-jdEnv-newer-isOlder', name: '京喜新团-京东新渠道-新拉新-老用户' },
  { key: 'jxTuan-jdEnv-newer-isNewer', name: '京喜新团-京东新渠道-新拉新-新用户' },
  { key: 'jdTuan-jxEnv-older-isOlder', name: '京东新团-京喜新渠道-老拉新-老用户' },
  { key: 'jdTuan-jxEnv-older-isNewer', name: '京东新团-京喜新渠道-老拉新-新用户' },
  { key: 'jdTuan-jxEnv-newer-isOlder', name: '京东新团-京喜新渠道-新拉新-老用户' },
  { key: 'jdTuan-jxEnv-newer-isNewer', name: '京东新团-京喜新渠道-新拉新-新用户' },
  { key: 'jdTuan-jdEnv-older-isOlder', name: '京东新团-京东新渠道-老拉新-老用户' },
  { key: 'jdTuan-jdEnv-older-isNewer', name: '京东新团-京东新渠道-老拉新-新用户' },
  { key: 'jdTuan-jdEnv-newer-isOlder', name: '京东新团-京东新渠道-新拉新-老用户' },
  { key: 'jdTuan-jdEnv-newer-isNewer', name: '京东新团-京东新渠道-新拉新-新用户' },
];
