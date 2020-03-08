import { goto, addUrlParam } from '../utils';
import { setPageEnv } from '../utils/env';
import { PGDetailUrl, envList, statusList, newerTuanList, WXH5UA, JXAppUA, JDAppUA } from '../utils/contanst';

statusList.forEach((status) => {
  if (
    [
      'host-more-active',
      'host-more-inactive',
      'host-success-active',
      'host-success-inactive',
      'host-ing-inactive',
      'host-fail-active',
      'host-fail-inactive',
    ].indexOf(status.key) === -1
  ) {
    newerTuanList.forEach((newer) => {
      const url = addUrlParam(PGDetailUrl, { status: status.key, newer: newer.key });
      let env: Env = {
        key: 'jd',
        ua: JDAppUA,
      };
      if (newer.key.indexOf('jxEnv') >= 0) {
        env = {
          key: 'jx',
          ua: JXAppUA,
        };
      }
      test(`${env.key}-${status.name}-${newer.name}`, async () => {
        await setPageEnv(env);
        await goto(url);
        // 延迟保证倒计时走完
        await page.waitFor(2000);
        if (['host-ing-active', 'host-ing-inactive'].indexOf(status.key) >= 0) {
          await expect(page).toClick('.content_close');
        }
        expect(await page.screenshot({ fullPage: false })).toMatchImageSnapshot();
      });
    });
  }
});
