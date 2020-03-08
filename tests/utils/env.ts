
/**
 * 设置环境变量
 *
 * @export
 * @param {{ key: string, ua: string }} env
 */
export async function setPageEnv(env: Env) {
    await page.setUserAgent(env.ua);
    if (env.key === 'wx') {
      await page.setCookie({ name: 'wx_nickname', value: 'jingxi' });
    }
}
