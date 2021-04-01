/*
 * @Author: Miya
 * @Date: 2020-07-27 15:49:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-01 11:25:53
 * @Description: axios方法封装
 * @FilePath: \Single-Search\src\services\ajax.ts
 */
import axios from 'axios';

export const GET = (url: string, data?: object, token?: string | null) => {
  return axios({
    method: 'get',
    headers: {
      authorization: `Bearer ${token}`
    },
    url,
    data,
  });
};

export const POST = (url: string, data: object, token?: string | null) => {
  return axios({
    method: 'post',
    headers: {
      authorization: `Bearer ${token}`
    },
    url,
    data
  });
};

export const PUT = (url: string, data: object, token?: string | null) => {
  return axios({
    method: 'put',
    headers: {
      authorization: `Bearer ${token}`
    },
    url,
    data
  });
};

export const DELETE = (url: string, data: object, token?: string | null) => {
  return axios({
    method: 'delete',
    headers: {
      authorization: `Bearer ${token}`
    },
    url,
    data
  });
};
