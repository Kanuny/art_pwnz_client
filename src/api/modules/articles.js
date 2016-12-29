// @flow
import type { RequestFunctionType } from '../types';

const load = (r: RequestFunctionType) =>
  (): Promise<any> => r({
    method: 'GET',
    url: '/articles?page=0',
  })
;

const getById = (r: RequestFunctionType) =>
  (id: number): Promise<any> => r({
    method: 'GET',
    url: `/articles/${id}`,
  })
;

;

export default {
  load,
  getById,
};
