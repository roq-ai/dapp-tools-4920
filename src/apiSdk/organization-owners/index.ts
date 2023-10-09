import queryString from 'query-string';
import { OrganizationOwnerInterface, OrganizationOwnerGetQueryInterface } from 'interfaces/organization-owner';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getOrganizationOwners = async (
  query?: OrganizationOwnerGetQueryInterface,
): Promise<PaginatedInterface<OrganizationOwnerInterface>> => {
  return fetcher('/api/organization-owners', {}, query);
};

export const createOrganizationOwner = async (organizationOwner: OrganizationOwnerInterface) => {
  return fetcher('/api/organization-owners', { method: 'POST', body: JSON.stringify(organizationOwner) });
};

export const updateOrganizationOwnerById = async (id: string, organizationOwner: OrganizationOwnerInterface) => {
  return fetcher(`/api/organization-owners/${id}`, { method: 'PUT', body: JSON.stringify(organizationOwner) });
};

export const getOrganizationOwnerById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/organization-owners/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteOrganizationOwnerById = async (id: string) => {
  return fetcher(`/api/organization-owners/${id}`, { method: 'DELETE' });
};
