import axios from 'axios';
import { PowerModel, PrefixUriAdmin } from '@/api/common';
import { UriProduct } from '@/api/crm/product-service/product';

export interface PriceBook extends PowerModel {
  isStandard: boolean;
  name: string;
  description: string;
  storeId: number;
}

export interface ListPriceBooksRequest {
  ids?: number[];
  likeName?: string;
  storeIds?: number[];
  pageIndex?: number;
  pageSize?: number;
}

export interface ListPriceBooksReply {
  list: PriceBook[];
  pageIndex: number;
  pageSize: number;
  total: number;
}

export interface GetPriceBooksRequest {
  priceBookId: number;
}

export type GetPriceBooksReply = PriceBook;

export function listPriceBooks(request: ListPriceBooksRequest) {
  return axios.get<ListPriceBooksReply>(
    `${PrefixUriAdmin + UriProduct}/price-books/page-list`,
    {
      params: request,
    }
  );
}

export function getPriceBook(request: GetPriceBooksRequest) {
  return axios.get<GetPriceBooksReply>(
    `${PrefixUriAdmin + UriProduct}/price-books/${request.priceBookId}`,
    {
      params: request,
    }
  );
}

export function createPriceBook(request: PriceBook) {
  return axios.post<PriceBook>(
    `${PrefixUriAdmin + UriProduct}/price-books`,
    request
  );
}

export interface DeletePriceBookRequest {
  id: number;
}

export interface DeletePriceBookReply {
  id: number;
}

export function deletePriceBook(request: DeletePriceBookRequest) {
  return axios.delete<DeletePriceBookReply>(
    `${PrefixUriAdmin + UriProduct}/price-books/${request.id}`
  );
}
