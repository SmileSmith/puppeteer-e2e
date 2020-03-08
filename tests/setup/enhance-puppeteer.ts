import { onRequestInterceptor } from '../utils/mock';
import { Request } from 'puppeteer';

jest.setTimeout(30000);

beforeAll(async () => {
  page.on('request', (request: Request) => {
    page.url();
    // 拦截请求，使用代理数据
    onRequestInterceptor(request);
  });
  await page.setRequestInterception(true);
});
