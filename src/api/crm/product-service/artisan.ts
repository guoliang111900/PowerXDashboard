import { PowerModel, PrefixUriAdmin } from '@/api/common';
import axios from 'axios';
import { UriProduct } from '@/api/crm/product-service/product';
import { MediaSet } from '@/api/mediaresource';

const UriArtisan = '/artisans';

export interface Artisan extends PowerModel, MediaSet {
  employeeId?: number;
  name: string;
  level?: number;
  gender: boolean;
  birthday: Date;
  phoneNumber: string;
  coverURL: string;
  workNo: string;
  email: string;
  experience: string;
  specialty: string;
  certificate: string;
  address: string;
}

export interface ListArtisanPageRequest {
  ids?: number[];
  likeName?: string;
  storeIds?: number[];
  pageIndex?: number;
  pageSize?: number;
}

export interface ListArtisanPageReply {
  list: Artisan[];
  pageIndex: number;
  pageSize: number;
  total: number;
}

export function listArtisans(request: ListArtisanPageRequest) {
  return axios.get<ListArtisanPageReply>(
    `${PrefixUriAdmin + UriProduct + UriArtisan}/page-list`,
    {
      params: request,
    }
  );
}

export function createArtisan(request: Artisan) {
  return axios.post<Artisan>(
    `${PrefixUriAdmin + UriProduct + UriArtisan}`,
    request
  );
}

export function updateArtisan(request: Artisan) {
  return axios.put<Artisan>(
    `${PrefixUriAdmin + UriProduct + UriArtisan}/${request.id}`,
    request
  );
}

export interface DeleteArtisanRequest {
  id: number;
}

export interface DeleteArtisanReply {
  id: number;
}

export function deleteArtisan(request: DeleteArtisanRequest) {
  return axios.delete<DeleteArtisanReply>(
    `${PrefixUriAdmin + UriProduct + UriArtisan}/${request.id}`
  );
}
