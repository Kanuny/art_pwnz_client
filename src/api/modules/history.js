// @flow
import type { RequestFunctionType } from '../types';

const load = (r: RequestFunctionType) =>
  (): Promise<any> => r({
    method: 'GET',
    url: '/history',
  })
;

export default {
  load,
};
