// @flow
import type { RequestFunctionType } from '../types';

const load = (r: RequestFunctionType) =>
  (cfg: Object): Promise<any> => r({
    method: 'GET',
    url: `/articles?page=${cfg.page}${cfg.filter ? `&filter=${cfg.filter}` : ''}`,
  })
;

const getById = (r: RequestFunctionType) =>
  (id: number): Promise<any> => r({
    method: 'GET',
    url: `/articles/${id}`,
  })
;

const getImage = (r: RequestFunctionType) =>
  (id: number): Promise<any> => r({
    method: 'GET',
    url: `/images/${id}`,
  })
;

const getFilters = (r: RequestFunctionType) =>
  (): Promise<any> => r({
    method: 'GET',
    url: '/articles/filters',
  })
;

export default {
  load,
  getById,
  getImage,
  getFilters,
};
