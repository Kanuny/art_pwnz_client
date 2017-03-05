// @flow
import type { RequestFunctionType } from '../types';

const load = (r: RequestFunctionType) =>
  (page: number): Promise<any> => r({
    method: 'GET',
    url: `/articles?page=${page}`,
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


export default {
  load,
  getById,
  getImage,
};
