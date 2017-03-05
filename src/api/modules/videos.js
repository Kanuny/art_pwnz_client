// @flow
import type { RequestFunctionType } from '../types';

const load = (r: RequestFunctionType) =>
  (page: number): Promise<any> => r({
    method: 'GET',
    url: `/videos?page=${page}`,
  })
;

export default {
  load,
};
