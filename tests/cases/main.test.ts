import { goto, addUrlParam } from '../utils';
import { setPageEnv } from '../utils/env';
import { PGDetailUrl, envList, statusList } from '../utils/contanst';

statusList.forEach((status) => {
  envList.forEach((env) => {
    let url = addUrlParam(PGDetailUrl, { status: status.key, env: env.key });

    if (['host-ing-active', 'host-ing-inactive'].indexOf(status.key)) {
      test(`${env.key}-${status.name}-引导弹窗`, async () => {
        await setPageEnv(env);
        await goto(url);
        // 延迟保证倒计时走完
        await page.waitFor(2000);
        expect(await page.screenshot({ fullPage: false })).toMatchImageSnapshot();
      });
    }

    test(`${env.key}-${status.name}`, async () => {
      await setPageEnv(env);
      await goto(url);
      // 延迟保证倒计时走完
      await page.waitFor(2000);
      if (['host-ing-active', 'host-ing-inactive'].indexOf(status.key)) {
        await expect(page).toClick('.content_close');
      }
      expect(await page.screenshot({ fullPage: false })).toMatchImageSnapshot();
    });

    if (
      ['host-fail-active', 'guest-more-active', 'guest-success-active', 'guest-fail-active'].indexOf(status.key) >= 0
    ) {
      test(`${env.key}-${status.name}-推荐团`, async () => {
        const isJXEnv = ['jx', 'qq'].indexOf(env.key) >= 0;
        const btnSelector = isJXEnv ? '.tuan_status_reco_cash_item_btn' : '.tuan_status_reco_normal_item_btn';
        await expect(page).toClick(btnSelector);
        // 延迟保证弹窗完全弹出
        await page.waitFor(1000);
        expect(await page.screenshot({ fullPage: false })).toMatchImageSnapshot();
      });
    }

    if (['host-more-active','host-more-inactive', 'host-success-active','host-success-inactive','host-fail-active','host-fail-inactive'].indexOf(status.key) === -1) {
      url = addUrlParam(url, {newertuan: 'old', });
    }
  });
});
