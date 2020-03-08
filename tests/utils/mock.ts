import { URL } from 'url';
import { Request } from 'puppeteer';
import mocks from '../mocks';
import log from './log';

// 设置请求拦截器的数据，用于同一请求返回不同结果，生效一次后自动销毁
export const interceptors: { [api: string]: any } = {};
export const setRequestInterceptor = (api: string, value: any) => {
  interceptors[api] = value;
};

/**
 * 判断是否是JSONP请求
 *
 * @export
 * @param {URL} url
 * @returns {boolean}
 */
export function checkJSONP(url: URL): boolean {
  if (!url) return false;
  return !!url.searchParams.get('callback');
}

/**
 * 请求结果JSON转换为JSONP
 *
 * @param {URL} location
 * @param {*} response
 * @returns
 */
function toJSONP(response: any, location: URL) {
  const callback = location.searchParams.get('callback');
  const body = typeof response === 'string' ? response : JSON.stringify(response);
  return `${callback}(${body})`;
}

/**
 * 请求拦截器
 *
 * @export
 * @param {Request} request
 */
export function onRequestInterceptor(request: Request) {
  const resourceType = request.resourceType();
  const location = new URL(request.url()); // 请求地址
  const url = new URL(page.url()); // 页面地址

  const isJSONP = checkJSONP(location);
  if (['xhr', 'fetch'].indexOf(resourceType) === -1 && !isJSONP) {
    return request.continue();
  }
  // xhr、fetch、jsonp认为是业务接口请求
  let apiKey = location.pathname.split('/').pop();
  if (apiKey === 'get' && location.searchParams.get('func') === 'pinlike') {
    apiKey = 'pinlike';
  }
  if (!apiKey || !mocks.hasOwnProperty(apiKey)) {
    return request.continue();
  }
  // 命中Mock规则的
  const mock = mocks[apiKey];
  let response: any;
  if (typeof mock === 'function') {
    response = Object.assign({}, mock({ url, location, request, interceptor: interceptors[apiKey] }));
    delete interceptors[apiKey]; // 生效一次后自动销毁
  } else {
    response = mock;
  }
  // 格式处理
  if (typeof response.body === 'object') {
    response.body = isJSONP ? toJSONP(response.body, location) : JSON.stringify(response.body);
  }
  request.respond(response);
}
