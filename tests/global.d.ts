/// <reference types="node" />

import { URL } from 'url';
import { Request, RespondOptions } from 'puppeteer';

interface MockRespondOptions extends RespondOptions {
  body?: any;
}

type MockRespondFunction = (params: {
  url: URL;
  location: URL;
  request: Request;
  interceptor: any;
}) => MockRespondOptions | void;

declare global {
  interface MockAPI {
    [api: string]: MockRespondOptions | MockRespondFunction;
  }
  interface Env {
    key: 'wx' | 'qq' | 'm' | 'jx' | 'jd';
    ua: string;
  }
  type TuanStatus =
    | 'host-ing-active'
    | 'host-success-active'
    | 'host-more-active'
    | 'host-fail-active'
    | 'host-ing-inactive'
    | 'host-success-inactive'
    | 'host-more-inactive'
    | 'host-fail-inactive'
    | 'guest-ing-active'
    | 'guest-success-active'
    | 'guest-more-active'
    | 'guest-fail-active'
    | 'guest-ing-inactive'
    | 'guest-success-inactive'
    | 'guest-more-inactive'
    | 'guest-fail-inactive';
  interface Status {
    key: TuanStatus;
    name: string;
  }
  type NewerTuan =
    | 'jxTuan-jxEnv-older-isOlder'
    | 'jxTuan-jxEnv-older-isNewer'
    | 'jxTuan-jxEnv-newer-isOlder'
    | 'jxTuan-jxEnv-newer-isNewer'
    | 'jxTuan-jdEnv-older-isOlder'
    | 'jxTuan-jdEnv-older-isNewer'
    | 'jxTuan-jdEnv-newer-isOlder'
    | 'jxTuan-jdEnv-newer-isNewer'
    | 'jdTuan-jxEnv-older-isOlder'
    | 'jdTuan-jxEnv-older-isNewer'
    | 'jdTuan-jxEnv-newer-isOlder'
    | 'jdTuan-jxEnv-newer-isNewer'
    | 'jdTuan-jdEnv-older-isOlder'
    | 'jdTuan-jdEnv-older-isNewer'
    | 'jdTuan-jdEnv-newer-isOlder'
    | 'jdTuan-jdEnv-newer-isNewer';
  interface Newer {
      key: NewerTuan;
      name: string;
    }
}
